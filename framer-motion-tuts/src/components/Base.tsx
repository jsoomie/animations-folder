import { Link } from "react-router-dom";
import { IProps } from "interfaces";
import { motion } from "framer-motion";
import {
  one,
  defaults,
  buttonGlow,
  listSettings,
  containerVariant,
} from "utils";

const { button, container, list } = {
  button: {
    from: {
      x: "-100vw",
    },
    to: {
      x: one.ZERO,
      transition: {
        type: defaults.SPRING,
        stiffness: 75,
      },
    },
    onHover: buttonGlow,
  },

  list: listSettings,
  container: containerVariant,
};

export const Base = ({ addBase, pizza }: IProps) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust", "Cheese Crust"];

  return (
    <motion.div
      variants={container}
      initial="from"
      animate="to"
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
        <motion.div variants={button} className="next">
          <Link to="/toppings">
            <motion.button whileHover={button.onHover}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};
