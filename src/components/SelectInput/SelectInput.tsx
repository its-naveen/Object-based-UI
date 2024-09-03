import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { get } from 'lodash';

interface SelectProps {
  inputProps: any;
  change: (e: any) => void;
  value: string;
  error: boolean;
}

export default function SelectInput({ inputProps, change, value, error }: SelectProps) {
  return (
    <FormControl fullWidth size='small'>
      <InputLabel>{inputProps.label}</InputLabel>
      <Select
        value={value}
        {...inputProps}
        onChange={change}
        error={error}
      >
        {
          get(inputProps, 'options', []).map((option: any) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};
