import { motion, AnimatePresence  } from "framer-motion";
import { useState, useEffect } from "react";
const AnimatedTextWord = ({ text }: any) => {
  const words = text ? text.split(" ") : [''] as [String];
  const [isVisible, setIsVisible] = useState(true);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isVisible]);
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence>
    {isVisible && <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2.5rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, index: number) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      )
      )}
    </motion.div>}
    </AnimatePresence>
  );
};

export default AnimatedTextWord