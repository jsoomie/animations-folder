import { Link } from "react-router-dom";
import { IProps } from "interfaces";
import { motion } from "framer-motion";
import { buttonGlow, listSettings } from "utils";

const { button, list } = {
  button: {
    onHover: buttonGlow,
  },
  list: listSettings,
};

export const Toppings = ({ addTopping, pizza }: IProps) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>

      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={list.onHover}
              transition={list.config}
              key={topping}
              onClick={() => addTopping!(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button whileHover={button.onHover}>Order</motion.button>
      </Link>
    </div>
  );
};
