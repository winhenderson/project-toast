import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onToastClose }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              onClose={() => onToastClose(toast.id)}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
