import React from 'react';
import Grid from '@mui/material/Grid2';
import { capitalize } from 'lodash';

const Breadcrumb = React.lazy(() => import('../../customComponents/Breadcrumb/Breadcrumb'));

export default function UserCreation() {
  const [activeStep, setActiveStep] = React.useState(1);

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

  const tabs = [
    {
      label: 'primary details',
      step: 1,
    },
    {
      label: 'additional details',
      step: 2,
    },
    {
      label: 'confirmation',
      step: 3,
    }
  ];

  const handleActiveStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleGetStepContent = () => {
    switch (activeStep) {
      case 1:
        return <h1>Provide your primary details</h1>
      case 2:
        return <h1>Provide your additional details</h1>
      case 3:
        return <h1>User creation Confirmation</h1>
      default:
        return <h1>Provide your primary details</h1>
    }
  }

  return (
    <section className='user-creation'>
      <h1 className='title' role='user creation title'>User Creation</h1>
      <Breadcrumb options={breadcrumbOption} />
      <Grid container spacing={2}>
        <Grid size={2} className='page-container'>
          <section className='stepper-wrapper'>
            {
              tabs.map((tab: any, idx: number) => (
                <span 
                  onClick={() => handleActiveStepChange(tab.step)} 
                  className={`${activeStep === tab.step ? 'active-stepper' : 'stepper'}`}>
                  {idx + 1}. {capitalize(tab.label)}
                </span>
              ))
            }
          </section>
        </Grid>
        <Grid className="grid-item" size={10}>
          <div className='stepper-content'>
            {handleGetStepContent()}
          </div>
        </Grid>
      </Grid>
    </section>
  )
}
