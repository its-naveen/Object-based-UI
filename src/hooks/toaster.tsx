import React, { createContext, useState, useContext } from "react";
import { Toaster } from "../customComponents/Toaster/Toaster";

// Toast context
const ToastContext = createContext<any>(null);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

  const showToast = (message: string, type: string = "info") => {
    setToast({ message, type });

    // Hide the toast after 3 seconds
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toaster message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};
