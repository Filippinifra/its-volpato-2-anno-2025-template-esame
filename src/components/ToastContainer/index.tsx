import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "../../context/useToast";
import { toastWrapperClass, wrapperToastContainer } from "./style.css";

const toastAnimation = {
  close: {
    opacity: 0,
    y: -15,
    scale: 0.5,
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className={wrapperToastContainer}>
      <AnimatePresence>
        {toasts.map(({ message, variant }, index) => (
          <motion.div
            key={index}
            className={toastWrapperClass[variant]}
            style={{
              padding: 12,
              color: "white",
            }}
            initial={"close"}
            variants={toastAnimation}
            animate="open"
            exit="close"
            transition={{
              duration: 0.5,
              delay: 0,
              ease: [0.84, -0.01, 0.19, 0.99],
            }}
            layout
          >
            <span>{message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
