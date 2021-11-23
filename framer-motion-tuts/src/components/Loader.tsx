import { Fragment } from "react";
import { motion } from "framer-motion";
import { one } from "utils";

const { loader } = {
  loader: {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: one.HALF,
        },
        y: {
          yoyo: Infinity,
          duration: one.QUARTER,
          ease: "easeOut",
        },
      },
    },
  },
};

export const Loader = () => {
  return (
    <Fragment>
      <motion.div
        variants={loader}
        animate="animationOne"
        className="loader"
      ></motion.div>
    </Fragment>
  );
};
