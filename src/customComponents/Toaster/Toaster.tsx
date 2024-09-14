interface ToasterProps {
  message: string;
  type: string;
}

export const Toaster = ({ message, type }: ToasterProps) => {
  return (
    <div className={`toaster ${type}`}>
      <p>{message}</p>
    </div>
  );
};
