import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(variant, message) {
    setToasts([{ id: crypto.randomUUID(), variant, message }, ...toasts]);
  }

  function closeToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
