import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { button, container } = {
  button: {
    scale: 1,
  },
  container: {
    scale: 1,
  },
};

export const Home = () => {
  return (
    <motion.div animate={container} className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button animate={button}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};
