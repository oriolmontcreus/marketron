import React, { useRef, useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLUListElement>(null);

  return (
    <ul
      ref={navRef}
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 mt-5"
    >
      <Tab setPosition={setPosition} navRef={navRef}>Home</Tab>
      <Tab setPosition={setPosition} navRef={navRef}>Pricing</Tab>
      <Tab setPosition={setPosition} navRef={navRef}>Features</Tab>
      <Tab setPosition={setPosition} navRef={navRef}>Docs</Tab>
      <Tab setPosition={setPosition} navRef={navRef}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  navRef,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  navRef: React.RefObject<HTMLUListElement>;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (!ref.current || !navRef.current) return;

      const { width, left } = ref.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      setPosition({
        left: left - navRect.left,
        width,
        opacity: 1,
      });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      if (element) {
        element.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [setPosition, navRef]);

  return (
    <li
      ref={ref}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      transition={{
        duration: 0,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Navbar;

type Position = {
  left: number;
  width: number;
  opacity: number;
};