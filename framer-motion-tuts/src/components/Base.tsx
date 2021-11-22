import { Link } from "react-router-dom";
import { IProps } from "interfaces";
import { motion } from "framer-motion";
import { one, defaults, buttonGlow, listSettings } from "utils";

const { button, container, list } = {
  button: {
    from: {
      x: "-100vw",
    },
    to: {
      x: 0,
    },
    onHover: buttonGlow,
    config: {
      type: defaults.SPRING,
      stiffness: 75,
    },
  },
  list: listSettings,
  container: {
    from: {
      x: "100vw",
    },
    to: {
      x: one.ZERO,
    },
    config: {
      type: defaults.SPRING,
      stiffness: 75,
      delay: one.HALF,
    },
  },
};

export const Base = ({ addBase, pizza }: IProps) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust", "Cheese Crust"];

  return (
    <motion.div
      initial={container.from}
      animate={container.to}
      transition={container.config}
      className="base container"
    >
      <h3>Step 1: Choose your base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={list.onHover}
              transition={list.config}
              key={base}
              onClick={() => addBase!(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={button.from}
          animate={button.to}
          transition={button.config}
          className="next"
        >
          <Link to="/toppings">
            <motion.button whileHover={button.onHover}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};
