import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let startTime = null;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min(
            (timestamp - startTime) / duration,
            1
          );

          const value = Math.floor(progress * end);

          setCount(value);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;