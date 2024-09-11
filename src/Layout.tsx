import React, { Suspense } from "react";
import Grid from "@mui/material/Grid2";
import Fallback from "./components/Fallback/Fallback";

const Appbar = React.lazy(() => import("./components/Appbar/Appbar"));

export default function Layout({ children }: any) {
  return (
    <main className="layout">
      <Appbar />
      <Grid container spacing={0} className='content'>
        <Grid size={2} sx={{ bgcolor: 'plum', border: 'solid 0.3px black' }}>
          Sidebar
        </Grid>
        <Grid size={10} sx={{ bgcolor: 'plum', border: 'solid 0.3px black', maxHeight: '92vh', overflow: 'scroll' }}>
          <Suspense fallback={<Fallback />}>
            {children}
          </Suspense>
        </Grid>
      </Grid>
    </main>
  );
}
