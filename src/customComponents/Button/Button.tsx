import React from "react";
import { Button } from "@mui/material";

const Icons = React.lazy(() => import("../../icons"));

interface BtnProps {
  primary: boolean;
  click: () => void;
  children: React.ReactNode;
  startIcon?: string;
  type: 'light' | 'dark';
}

export default function CustomBtn(props: BtnProps) {
  return (
    <Button
      className={`${props.primary ? 'btn-primary' : 'btn-secondary'}`}
      variant={`${props.primary ? 'contained' : 'outlined'}`}
      aria-label="button"
      role={`${props.children} button`}
      onClick={props.click}
      startIcon={props.startIcon ? <Icons iconKey={props.startIcon} type={props.type} /> : undefined}>
      {props.children}
    </Button>
  );
}
