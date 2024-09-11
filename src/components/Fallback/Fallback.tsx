import { Box } from "@mui/material";
import Icons from "../../icons";

export default function Fallback() {
  return (
    <Box sx={{ m: 20 }}>
      <Icons iconKey="loader" type="dark" />
    </Box>
  );
}
