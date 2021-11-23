import { Fragment } from "react";
import { motion, useCycle } from "framer-motion";
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
    animationTwo: {
      y: [0, -40],
      x: 0,
      transition: {
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
  const [animation, cycle] = useCycle("animationOne", "animationTwo");
  return (
    <Fragment>
      <motion.div
        variants={loader}
        animate={animation}
        className="loader"
      ></motion.div>
      <div onClick={() => cycle()}>Cycle Loader</div>
    </Fragment>
  );
};
