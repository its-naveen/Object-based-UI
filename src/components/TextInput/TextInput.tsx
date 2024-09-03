import { TextField } from "@mui/material";

interface Props {
  inputProps: any;
  change: (e: any) => void;
  value: string;
  error: boolean;
}

export default function TextInput({ inputProps, change, value, error }: Props) {
  return (
    <TextField fullWidth size="small" {...inputProps} onChange={change} value={value} error={error} />
  );
};
