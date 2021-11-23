import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { one } from "utils";

const { header, svg, path } = {
  header: {
    from: {
      y: "-100px",
    },
    to: {
      y: "-10px",
      transition: {
        type: "spring",
        stiffness: 25,
        delay: one.QUARTER,
      },
    },
  },
  svg: {
    from: {
      rotate: -180,
    },
    to: {
      rotate: one.ZERO,
      transition: {
        duration: one.FULL,
      },
    },
  },
  path: {
    from: {
      opacity: one.ZERO,
      pathLength: one.ZERO,
    },
    to: {
      opacity: one.FULL,
      pathLength: one.FULL,
      transition: {
        duration: one.FULL * 2,
        ease: "easeInOut",
      },
    },
  },
};

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          variants={svg}
          initial="from"
          animate="to"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={path}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={path}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        variants={header}
        initial="from"
        animate="to"
        className="title"
      >
        <Link to="/">
          <h1>Pizza Joint</h1>
        </Link>
      </motion.div>
    </header>
  );
};
