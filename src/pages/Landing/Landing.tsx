import { Box, Typography } from "@mui/material";
import CustomBtn from "../../components/Button/Button";

export default function Landing() {
  return (
    <Box className='landing'>
      <Box className='section'>
        <Typography variant='h1' component='h1' className="title">
          The world’s largest mobile and web design library.
        </Typography>
        <Typography variant="body1" component='p' className="subtitle">
          Save hours of UI & UX research with our library of 300,000+ screens from the world’s best designed apps.
        </Typography>
        <CustomBtn variant="contained" size="medium">Join for free</CustomBtn>
      </Box>
      <Box className='section'>
        <Typography variant='h1' component='h1' className="title">
          The world’s largest mobile and web design library.
        </Typography>
        <Typography variant="body1" component='p' className="subtitle">
          Save hours of UI & UX research with our library of 300,000+ screens from the world’s best designed apps.
        </Typography>
        <CustomBtn variant="contained" size="medium">Join for free</CustomBtn>
      </Box>
    </Box>
  );
}
