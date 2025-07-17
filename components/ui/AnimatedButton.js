"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinkVariants = {
  rest: { y: 0 },
  hover: { y: "-50%" },
};

const navLinkTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

const AnimatedButton = ({
  href,
  text,
  textColor = "text-black",
  borderColor = "border-black",
  arrowBgColor = "bg-black",
  arrowColor = "text-white",
  className = "",
}) => (
  <motion.a
    href={href}
    className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wider ${borderColor} ${textColor} ${className}`}
    whileHover="hover"
    initial="rest"
    animate="rest"
  >
    <div className="relative block overflow-hidden h-5">
      <motion.span
        className="flex flex-col"
        variants={navLinkVariants}
        transition={navLinkTransition}
      >
        <span className="h-5 flex items-center">{text}</span>
        <span className="h-5 flex items-center">{text}</span>
      </motion.span>
    </div>

    <div className={`rounded-full p-1 ${arrowBgColor}`}>
      <div className="relative block overflow-hidden h-4 w-4">
        <motion.span
          className="flex flex-col"
          variants={navLinkVariants}
          transition={navLinkTransition}
        >
          <span className="h-4 flex items-center justify-center">
            <ArrowUpRight size={16} className={arrowColor} />
          </span>
          <span className="h-4 flex items-center justify-center">
            <ArrowUpRight size={16} className={arrowColor} />
          </span>
        </motion.span>
      </div>
    </div>
  </motion.a>
);

export default AnimatedButton;
