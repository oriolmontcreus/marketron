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
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-2 md:p-1 mt-5 flex-wrap justify-center"
    >
      <Tab setPosition={setPosition} navRef={navRef} href="/">Home</Tab>
      <Tab setPosition={setPosition} navRef={navRef} href="/#features">Features</Tab>
      <Tab setPosition={setPosition} navRef={navRef} href="/#pricing">Pricing</Tab>
      <Tab setPosition={setPosition} navRef={navRef} href="/#faq">FAQ</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  navRef,
  href
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  navRef: React.RefObject<HTMLUListElement>;
  href?: string;
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
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <a href={href} className="block w-full h-full">{children}</a>
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
      className="absolute z-0 h-9 rounded-full bg-black md:h-12"
    />
  );
};

export default Navbar;

type Position = {
  left: number;
  width: number;
  opacity: number;
};