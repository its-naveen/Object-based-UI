import React, { createContext, useState, useContext } from "react";
import { Toaster } from "../customComponents/Toaster/Toaster";

// Toast context
const ToastContext = createContext<any>(null);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: string }>>([]);

  const showToast = (message: string, type: string = "info") => {
    const newToast = { id: Date.now(), message, type }; // Unique ID for each toast
    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => removeToast(newToast.id), 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toaster key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
