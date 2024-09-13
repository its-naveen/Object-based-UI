import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Divider, InputBase, Paper, Typography } from "@mui/material";

const Button = React.lazy(() => import("../../customComponents/Button/Button"));
const Icons = React.lazy(() => import("../../icons"));

export default function Appbar() {
  return (
    <nav className="appbar">
      <Grid container spacing={0} className='appbar-grid'>
        <Grid size={2}>
          <Typography variant="h6" component='h6'>
            {/* <Icons iconKey="globe" type="dark" /> */}
            webapp.com
          </Typography>
        </Grid>
        <Grid size={8}>
          <Box className='main-search'>
            <Paper
              component="form"
              className="paper"
            >
              <Icons iconKey="search" type="dark" />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                role="search-input"
                aria-label="search-input"
              />
            </Paper>
          </Box>
        </Grid>
        <Grid size={2}>
          <Box className='user-action'>
            <Box className='action'>
              <Icons iconKey='bell' type="dark" badge count={0} />
            </Box>
            <Box className='action'>
              <Button primary={false} type="dark" click={() => console.log('clicked')}>
                signin
              </Button>
            </Box>
            <Box className='action'>
              <Button primary={true} type="light" click={() => console.log('clicked')}>
                login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </nav>
  );
}
