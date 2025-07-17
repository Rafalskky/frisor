"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SectionTitle = ({ small, large, className = "", largeClassName = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const dotVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="flex items-center justify-center gap-x-3 mb-4"
        variants={itemVariants}
      >
        <motion.span
          className="w-2 h-2 bg-black rounded-full"
          variants={dotVariants}
        />
        <motion.p
          className="section-title-small"
          variants={itemVariants}
        >
          {small}
        </motion.p>
      </motion.div>
      <motion.h2
        className={largeClassName || "section-title-large"}
        variants={itemVariants}
      >
        {large}
      </motion.h2>
    </motion.div>
  );
};

  export default SectionTitle;
