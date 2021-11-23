import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { defaults, one, buttonGlow } from "utils";

const { button, container } = {
  button: {
    onHover: buttonGlow,
  },
  container: {
    from: {
      opacity: defaults.OPACITY_ZERO,
    },
    to: {
      opacity: defaults.OPACITY_FULL,
      transition: {
        delay: defaults.DELAY - one.THIRD,
        duration: defaults.DURATION,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  },
};

export const Home = () => {
  return (
    <motion.div
      variants={container}
      initial="from"
      animate="to"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={button} whileHover="onHover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};
