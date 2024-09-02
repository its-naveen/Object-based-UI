import { TextField } from "@mui/material";

// interface InputProps {
//   type: string,
//   name: string,
//   placeholder: string,
//   varient: string,
//   value?: string,
//   isRequired: boolean
// };

export default function CustomInput({ inputProps }: any) {
  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined" {...inputProps}/>
  );
}
