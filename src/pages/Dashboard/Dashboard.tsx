import Grid from "@mui/material/Grid2";
import { useToast } from "../../hooks/toaster";

export default function Dashboard() {
  const { showToast } = useToast();

  const handleClick = () => {
    showToast("Welcome to webapp.com", "success");
  }

  return (
    <section className="dashboard">
      <h1 className='title' role="dashboard title" onClick={handleClick}>Dashboard</h1>
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
