import Grid from "@mui/material/Grid2";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <h1 role="dashboard title">Dashboard</h1>
      <Grid container spacing={2}>
        <Grid className='grid-filter' size={{xs: 12, md: 12}}></Grid>
        <Grid className='grid-item' size={{xs: 12, md: 6}}>

        </Grid>
        <Grid className='grid-item' size={{xs: 12, md: 3}}>

        </Grid>
        <Grid className='grid-item' size={{xs: 12, md: 3}}>

        </Grid>
        <Grid className='grid-item' size={{xs: 12, md: 6}}>

        </Grid>
        <Grid className='grid-item' size={{xs: 12, md: 6}}>

        </Grid>
        <Grid className='grid-item' size={{xs: 12, md: 6}}>

        </Grid>
        <Grid className='grid-item' size={{xs: 12, md: 6}}>

        </Grid>
      </Grid>
    </section>
  );
}
