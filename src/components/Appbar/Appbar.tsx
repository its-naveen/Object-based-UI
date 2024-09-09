import { Box, Typography } from "@mui/material";
import Icons from "../../icons";
import CustomBtn from "../Button/Button";

export default function Appbar() {
  return (
    <Box className='appbar'>
      <Box className='appbar-head'>
        <Icons iconKey='bars' color='dark' />
        <Typography variant='h6' component='h6' className='appbar-title'>Webapp</Typography>
      </Box>
      <Box>
        <CustomBtn size="small" variant="contained">Login</CustomBtn>
      </Box>
    </Box>
  );
}