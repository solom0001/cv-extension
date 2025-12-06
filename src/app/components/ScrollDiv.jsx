"use client";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const ScrollAniDiv = ({ children }) => {
  const ref = useRef(null);

  const controls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const boxVariables = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.div ref={ref} variants={boxVariables} initial="hidden" animate={controls} className="">
      {children}
    </motion.div>
  );
};

export default ScrollAniDiv;
