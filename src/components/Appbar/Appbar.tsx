import React from "react";
import { Box } from "@mui/material";

const Button = React.lazy(() => import("../../customComponents/Button/Button"));
const Tooltip = React.lazy(() => import("../../customComponents/Tooltip/Tooltip"));
const Icons = React.lazy(() => import("../../icons"));

export default function Appbar() {
  return (
    <nav className="appbar">
      <h2 className="appbar-title">
        {/* <Icons iconKey="globe" type="dark" /> */}
        webapp.com
      </h2>
      <div className='user-action'>
        <Box className='action'>
          <Tooltip position="bottom" label="notification">
          <Icons iconKey='bell' type="dark" badge count={0} />
          </Tooltip>
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
      </div>
    </nav>
  );
}
