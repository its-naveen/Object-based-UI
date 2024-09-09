import { Button } from "@mui/material";

interface ButtonProps {
  children: any;
  size: 'small' | 'medium' | 'large';
  variant: 'contained' | 'outlined';
}

export default function CustomBtn({ children, size, variant }: ButtonProps) {
  return (
    <Button className="btn-primary" size={size} variant={variant}>{children}</Button>
  );
}
