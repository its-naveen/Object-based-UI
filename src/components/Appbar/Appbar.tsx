import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useToast } from "../../hooks/toaster";

const Button = React.lazy(() => import("../../customComponents/Button/Button"));
const Tooltip = React.lazy(() => import("../../customComponents/Tooltip/Tooltip"));
const Icons = React.lazy(() => import("../../icons"));

export default function Appbar() {
  const router = useNavigate();
  const { showToast } = useToast();

  const gotoLogin = () => {
    localStorage.removeItem('token');
    showToast("Logout successful", "success");
    router('/login', { replace: true });
  };

  return (
    <nav className="appbar" role="appbar" aria-label="appbar">
      <h4 className="appbar-title">
        {/* <Icons iconKey="globe" type="dark" /> */}
        webapp.com
      </h4>
      <div className='user-action'>
        <Box className='action'>
          <Tooltip position="bottom" label="notification">
          <Icons iconKey='bell' type="dark" badge count={0} />
          </Tooltip>
        </Box>
        <Box className='action'>
          <Button primary={false} type="light" click={gotoLogin}>
            logout
          </Button>
        </Box>
      </div>
    </nav>
  );
}
