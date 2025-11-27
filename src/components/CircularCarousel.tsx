import React, {
  Children,
  useRef,
  useState,
  TouchEvent as ReactTouchEvent,
  MouseEvent as ReactMoveEvent,
  ReactNode,
  useImperativeHandle,
  forwardRef,
  Ref,
  useEffect,
} from "react";

export function lerp(start: number, stop: number, amt: number): number {
  return (1 - amt) * start + amt * stop;
}

const ARC_SIZE = 150;

interface CircularCarousel {
  scrollTo: (i: number) => void;
}

interface PagerProps {
  onSelect?: (index: number) => void;
  onSwapRight?: () => void;
  onPointerDown?: () => void;
  children: ReactNode;
}

function CircularCarouselComp(
  { onSelect, onSwapRight, onPointerDown, children }: PagerProps,
  ref: Ref<CircularCarousel>
): JSX.Element {
  const indexRef = useRef(0);
  const prevRef = useRef(0);
  const nextRef = useRef(0);
  const rendering = useRef(false);
  const wheelLockedRef = useRef(false);
  const [deg, setDeg] = useState(0);
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);

  const handleSetWrapper = (ref: HTMLDivElement | null) => setWrapper(ref);

  prevRef.current = deg;
  const len = Children.count(children);

  function move() {
    const next = nextRef.current;
    const prev = prevRef.current;
    const d = lerp(prev, next, 0.2);

    if (d !== prev) {
      setDeg(d);
      requestAnimationFrame(move);
    } else rendering.current = false;

    const index = Math.round(Math.abs(((d / ARC_SIZE) * len) % len));
    if (index !== indexRef.current) {
      indexRef.current = index;
      onSelect && onSelect(index);
    }
  }

  const onMouseDown = (e: ReactMoveEvent | ReactTouchEvent) => {
    const isTouch = e.type === "touchstart";
    let _deg = deg;

    onPointerDown && onPointerDown();

    const tryMove = (next: number) => {
      _deg = nextRef.current += next;
      _deg = nextRef.current = Math.min(_deg, 3);
      _deg = nextRef.current = Math.max(_deg, -ARC_SIZE + 3);

      if (!rendering.current) {
        rendering.current = true;
        requestAnimationFrame(move);
      }
    };

    const onMouseMove = ({ movementX }: MouseEvent) => {
      tryMove(movementX / 30);
    };

    let prevTouchPageX: number | undefined;
    const onTouchMove = ({ touches }: TouchEvent) => {
      const pageX = touches[0].pageX;
      if (prevTouchPageX) tryMove((pageX - prevTouchPageX) / 10);
      prevTouchPageX = pageX;
    };

    const onMouseUp = () => {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchend", onMouseUp);

      const angle = ARC_SIZE / len;
      const mod = _deg % angle;
      const diff = angle - Math.abs(mod);
      const sign = Math.sign(_deg);
      const max = angle * (len - 1);

      if (_deg > 0) {
        if (onSwapRight && indexRef.current === 0 && _deg > 2) onSwapRight();
        tryMove(-_deg);
      } else if (-_deg > max) {
        tryMove(-_deg - max);
      } else {
        const move = (diff <= angle / 2 ? diff : mod) * sign;
        tryMove(move);
      }
    };

    if (isTouch) {
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onMouseUp);
    } else {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  };

  // wheel scroll
  useEffect(() => {
    if (!wrapper) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (wheelLockedRef.current) return;
      wheelLockedRef.current = true;
      setTimeout(() => (wheelLockedRef.current = false), 100);

      let _deg = ARC_SIZE / len;
      if (e.deltaY > 0 || e.deltaX > 0) _deg *= -1;

      const next = Math.max(nextRef.current + _deg, -ARC_SIZE - _deg);
      nextRef.current = next;

      if (!rendering.current) {
        rendering.current = true;
        requestAnimationFrame(move);
      }
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, [wrapper, len]);

  useImperativeHandle(ref, () => ({
    scrollTo(i: number) {
      nextRef.current = (-ARC_SIZE / len) * i;
      if (!rendering.current) {
        rendering.current = true;
        requestAnimationFrame(move);
      }
    },
  }));

  return (
    <div
      ref={handleSetWrapper}
      className="relative w-full"
      style={{
        height: "30rem",
        ["--height" as any]: "30vh",
        ["--origin" as any]: "calc(30vh * 5)",
      }}
    >
      <div className="absolute left-0 w-full h-[300%]">
        <div className="absolute left-1/2 -translate-x-1/2 h-screen">
          <div
            className="items"
            style={{
              transform: `rotate(${deg}deg)`,
              transformOrigin: `center calc(var(--height) * 5)`,
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
          >
            {Children.map(children, (child, i) => (
              <div
                key={i}
                className="absolute top-0 left-0"
                style={{
                  height: "var(--height)",
                  transformOrigin: `center calc(var(--height) * 5)`,
                  transform: `translateX(-50%) rotate(${
                    i * (ARC_SIZE / len)
                  }deg)`,
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const CircularCarousel = forwardRef(CircularCarouselComp);

// ----------- FLIP CARD ----------

interface FlipCardProps {
  img: string;
  text: string;
}

export function FlipCard({ img, text }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-48 h-72 cursor-pointer [perspective:1000px]"
    >
      <div
        className={`relative w-full h-full duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-white">
          <img 
            src={img} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white text-black p-4 rounded-xl backface-hidden [transform:rotateY(180deg)] flex items-center justify-center text-sm">
          {text}
        </div>
      </div>
    </div>
  );
}