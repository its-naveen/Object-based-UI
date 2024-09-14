import React from 'react';
import Grid from '@mui/material/Grid2';

const Breadcrumb = React.lazy(() => import('../../customComponents/Breadcrumb/Breadcrumb'));

export default function UserCreation() {
  const breadcrumbOption = [
    {
      label: 'dashboard',
      link: '/',
    },
    {
      label: 'user creation',
      link: '/user-creation',
    },
  ]
  return (
    <section className='user-creation'>
      <h1 className='title' role='user creation title'>User Creation</h1>
      <Breadcrumb options={breadcrumbOption} />
      <Grid container spacing={2}>
        <Grid className="grid-item" size={3}>

        </Grid>
        <Grid className="grid-item" size={9}>

        </Grid>
      </Grid>
    </section>
  )
}
