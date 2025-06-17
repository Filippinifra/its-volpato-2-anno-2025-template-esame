import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const onAddToast = (message, isError) => {
    const idToast = v4();
    setToasts([
      ...(toasts.length > 2 ? toasts.slice(1) : toasts),
      { message, variant: isError ? "error" : "success", id: idToast },
    ]);

    setTimeout(() => {
      setToasts((toasts) => toasts.filter(({ id }) => id !== idToast));
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ toasts, onAddToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
