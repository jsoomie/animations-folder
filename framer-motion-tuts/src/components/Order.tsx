import { motion } from "framer-motion";
import { IModal, IProps } from "interfaces";
import { containerVariant, defaults } from "utils";
import { useEffect } from "react";

const { container, child } = {
  container: containerVariant,
  child: {
    from: {
      opacity: defaults.OPACITY_ZERO,
    },
    to: {
      opacity: defaults.OPACITY_FULL,
    },
  },
};

export const Order = ({ pizza, setShowModal }: IProps & Partial<IModal>) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal!(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, [setShowModal]);

  return (
    <motion.div
      variants={container}
      initial="from"
      animate="to"
      className="container order"
    >
      <h2>Thank you for your order</h2>
      <motion.p variants={child}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={child}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};
