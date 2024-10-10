import React from 'react';
import Grid from '@mui/material/Grid2';
import { capitalize } from 'lodash';

const Breadcrumb = React.lazy(() => import('../../customComponents/Breadcrumb/Breadcrumb'));

export default function Media() {
  const [activeStep, setActiveStep] = React.useState(1);

  const breadcrumbOption = [
    {
      label: 'dashboard',
      link: '/',
    },
    {
      label: 'media',
      link: '/media',
    },
  ]

  const tabs = [
    {
      label: 'all',
      step: 1,
    },
    {
      label: 'posts',
      step: 2,
    },
    {
      label: 'images',
      step: 3,
    },
    {
      label: 'audios',
      step: 4,
    },
    {
      label: 'videos',
      step: 5,
    },
  ];

  const handleActiveStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleGetStepContent = () => {
    switch (activeStep) {
      case 1:
        return <h1>All</h1>
      case 2:
        return <h1>Posts</h1>
      case 3:
        return <h1>Images</h1>
      case 4:
        return <h1>Audios</h1>
      case 5:
        return <h1>Videos</h1>
      default:
        return <h1>All</h1>
    }
  }

  return (
    <section className='setting'>
      <h1 className='title' role='setting title'>Media</h1>
      <Breadcrumb options={breadcrumbOption} />
      <Grid container spacing={2}>
        <Grid size={12} className='page-container'>
          <section className='tab-wrapper'>
            {
              tabs.map((tab: any) => (
                <span 
                  onClick={() => handleActiveStepChange(tab.step)} 
                  className={`${activeStep === tab.step ? 'active-tab' : 'tab'}`}>
                  {capitalize(tab.label)}
                </span>
              ))
            }
            <div className='tab-content'>
              {handleGetStepContent()}
            </div>
          </section>
        </Grid>
      </Grid>
    </section>
  )
}
