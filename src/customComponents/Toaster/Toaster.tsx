interface ToasterProps {
  message: string;
  type: string;
}

export const Toaster = ({ message, type }: ToasterProps) => {
  return (
    <div className={`toaster ${type}`} role="toaster" aria-label="toaster">
      <p>{message}</p>
    </div>
  );
};
