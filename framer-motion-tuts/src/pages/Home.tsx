import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { defaults, one, buttonGlow } from "utils";

const { button, container } = {
  button: {
    to: {
      scale: defaults.SCALE,
    },
    onHover: buttonGlow,
  },
  container: {
    from: {
      opacity: defaults.OPACITY_ZERO,
    },
    to: {
      opacity: defaults.OPACITY_FULL,
    },
    config: {
      delay: defaults.DELAY - one.THIRD,
      duration: defaults.DURATION + one.THIRD,
    },
  },
};

export const Home = () => {
  return (
    <motion.div
      initial={container.from}
      animate={container.to}
      transition={container.config}
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button animate={button.to} whileHover={button.onHover}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};
