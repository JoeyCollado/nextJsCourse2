"use client";

import { cn } from "@/utils/cn";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

export const Accordion: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <dl className={cn("flex flex-col items-start justify-start", className)}>
      {children}
    </dl>
  );
};

const TabContext = createContext<{
  isOpen: boolean;
  setOpenState: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const Tab: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [isOpen, setOpenState] = useState(false);

  return (
    <TabContext.Provider value={{ isOpen, setOpenState }}>
      <div className={cn("bg-bg w-full p-6", className)}>{children}</div>
    </TabContext.Provider>
  );
};

export const Trigger: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const { setOpenState, isOpen } = useContext(TabContext)!;

  return (
    <dt>
      <button
        aria-expanded={isOpen}
        onClick={() => setOpenState((e) => !e)}
        className={cn(
          "flex w-full items-center justify-between gap-2 text-start text-xl font-normal",
          className
        )}
      >
        <span>{children}</span>
        <IconChevronDown
          size={"20"}
          className={twMerge(
            isOpen ? "rotate-180" : "rotate-0",
            "min-w-[20px] transition-all duration-300"
          )}
        />
      </button>
    </dt>
  );
};

export const Content: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const { isOpen } = useContext(TabContext)!;
  return (
    <motion.dd
      layout
      aria-hidden={isOpen}
      className={cn("overflow-hidden text-secondary", className)}
      initial={{ height: 0, pointerEvents: "none" }}
      animate={
        isOpen
          ? { height: "fit-content", pointerEvents: "auto", marginTop: "1rem" }
          : { height: 0, pointerEvents: "none" }
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.dd>
  );
};

export default Accordion;