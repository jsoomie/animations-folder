import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IModal } from "interfaces";
import { defaults, one } from "utils";

const { backdrop, modal } = {
  backdrop: {
    from: {
      opacity: defaults.OPACITY_ZERO,
    },
    to: {
      opacity: defaults.OPACITY_FULL,
    },
  },
  modal: {
    from: {
      y: "-100vh",
      opacity: defaults.OPACITY_ZERO,
    },
    to: {
      y: "200px",
      opacity: defaults.OPACITY_FULL,
      transition: {
        delay: one.HALF,
      },
    },
  },
};

export const Modal = ({ showModal, setShowModal }: IModal) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="from"
          animate="to"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
