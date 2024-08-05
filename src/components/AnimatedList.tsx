import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
}

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 2500 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const [displayedItems, setDisplayedItems] = useState<React.ReactNode[]>([]);
    const childrenArray = React.Children.toArray(children);
    const [ref, isInView] = useInView();
    const maxItems = 7;

    useEffect(() => {
      let interval: number;

      if (isInView) {
        interval = window.setInterval(() => {
          setIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % childrenArray.length;

            setDisplayedItems((prevItems) => {
              const newItems = [childrenArray[nextIndex], ...prevItems];
              if (newItems.length > maxItems) {
                newItems.pop();
              }
              return newItems;
            });

            return nextIndex;
          });
        }, delay);
      }

      return () => window.clearInterval(interval);
    }, [childrenArray, delay, isInView]);

    return (
      <div ref={ref} className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {displayedItems.map((item, idx) => (
            <AnimatedListItem key={idx}>{item}</AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const [ref, isInView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: hasAnimated ? { scale: 1, opacity: 1, originY: 0 } : { scale: 0, opacity: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div ref={ref} {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}