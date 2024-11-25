import React from "react";
import { motion } from "framer-motion";
import { caveat } from "@/pages/_app";

export const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

export const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold font-caveat capitalize text-6xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word = "", index) => (
          <motion.span
            key={word + "-" + index}
            className={"inline-block " + caveat.className}
            variants={singleWord}
          >
            <span className={word === "Tonmoy" ? "text-red-600" : ""}>
              {word}&nbsp;
            </span>
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
