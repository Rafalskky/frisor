"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

const AnimatedCounter = ({ from = 0, to }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(from, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(0);
          }
        },
      });
    }
  }, [inView, from, to]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
