import React from "react";
import { Box, Button } from "@mui/material";
import { get, isEmpty } from 'lodash';
import Grid from '@mui/material/Grid2';
import TextInput from "../components/TextInput/TextInput";
import SelectInput from "../components/SelectInput/SelectInput";

interface FormProps {
  forms: any;
}

interface FieldProps {
  type: string;
  label: string;
  span: number;
  name: string;
  placeholder: string;
  value: string;
  required: boolean;
  validations?: any;
}

export default function RenderForms({ forms }: FormProps) {
  const [formData, setFormData] = React.useState<any>({});
  const [errorData, setErrorData] = React.useState<any>({});

  React.useEffect(() => {
    createInitialState();
  }, []);

  const createInitialState = () => {
    const formState = forms.map((form: any) => get(form, 'fields', []).reduce((acc: any, field: any) => {
      acc[field.name] = '';
      return acc;
    }, {}));
    const formField = formState.find((form: any) => form);
    setFormData(formField);
    const errorState = forms.map((form: any) => get(form, 'fields', []).reduce((acc: any, field: any) => {
      acc[field.name] = false;
      return acc;
    }, {}));
    const errorField = errorState.find((form: any) => form);
    setErrorData(errorField);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((ps: any) => ({
      ...ps,
      [name]: value
    }));
  };

  const handleFormReset = () => {
    createInitialState();
  };

  const handleSubmit = () => {
    console.log(formData);
    console.log(errorData);
  };

  const createField = (field: FieldProps) => {
    switch (field.type) {
      case 'text':
        return <TextInput inputProps={field} change={handleChange} value={formData[field.name]} error={errorData[field.name]} />;
      case 'select':
        return <SelectInput inputProps={field} change={handleChange} value={formData[field.name]} error={errorData[field.name]} />;
      default:
        return <TextInput inputProps={field} change={handleChange} value={formData[field.name]} error={errorData[field.name]} />;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {
        !isEmpty(forms) && forms.map((form: any) => (
          <Grid container spacing={2}>
            {
              get(form, 'fields', []).map((field: FieldProps) => (
                <Grid key={field.name} size={field.span}>
                  {createField(field)}
                </Grid>
              ))
            }
          </Grid>
        ))
      }
      <Box sx={{mt: 2}}>
        <Button size='small' variant="outlined" onClick={handleFormReset} sx={{ mr: 2 }}>Reset</Button>
        <Button size='small' variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};
