import React, { type ReactElement, useEffect, useMemo, useState, useRef } from "react";
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
  ({ className, children, delay = 3000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);
    const [ref, isInView] = useInView();

    useEffect(() => {
      let interval: number;
      if (isInView) {
        interval = window.setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);
      }

      return () => window.clearInterval(interval);
    }, [childrenArray.length, delay, isInView]);

    const itemsToShow = useMemo(
      () => (isInView ? childrenArray.slice(0, index + 1).reverse() : []),
      [index, childrenArray, isInView],
    );

    return (
      <div ref={ref} className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const [ref, isInView] = useInView();

  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: isInView ? { scale: 1, opacity: 1, originY: 0 } : { scale: 0, opacity: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div ref={ref} {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}