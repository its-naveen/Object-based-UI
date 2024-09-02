import { Container, MenuItem, Select } from "@mui/material";
import CustomInput from "../CustomInput/CustomInput";

export default function RenderForm({ formFields }: any) {
  const renderFields = (components: any) => {
    switch(components.type) {
      case 'input':
        return <CustomInput inputProps={{...components}}/>
      case 'select':
        return <Select>
          <MenuItem value='one'>One</MenuItem>
          <MenuItem value='two'>Two</MenuItem>
        </Select>
      default:
        return <CustomInput inputProps={{...components}}/>
    }
  };

  return (
    <Container maxWidth='xl'>
      {
        formFields.map((components: any) => (
          renderFields(components)
        ))
      }
    </Container>
  );
};
