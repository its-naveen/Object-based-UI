import React from 'react';
import Grid from '@mui/material/Grid2';
import Stepper from '../../customComponents/Stepper/Stepper';
import Button from '../../customComponents/Button/Button';

const Breadcrumb = React.lazy(() => import('../../customComponents/Breadcrumb/Breadcrumb'));

export default function UserCreation() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const steps = [
    {
      label: 'primary details',
    },
    {
      label: 'additional details',
    },
    {
      label: 'confirmation',
    }
  ];

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

  const handleGetStepContent = () => {
    switch (activeStep) {
      case 0:
        return <h1>Provide primary details</h1>
      case 1:
        return <h1>Provide additional details</h1>
      case 2:
        return <h1>User creation Confirmation</h1>
      default:
        return <h1>Provide primary details</h1>
    }
  }

  return (
    <section className='user-creation'>
      <h1 className='title' role='user creation title'>User Creation</h1>
      <Breadcrumb options={breadcrumbOption} />
      <Grid container spacing={2}>
        <Grid size={2} className='page-container'>
          <Stepper steps={steps} activeStep={activeStep} />
        </Grid>
        <Grid className='user-creation-content' size={10}>
          <div className='user-creation-steps'>
            {handleGetStepContent()}
            {activeStep !== 0 && <Button primary={false} type="dark" click={handleBack} disabled={activeStep === 0}>
              Back
            </Button>}
            {activeStep !== steps.length && <Button primary={true} type="dark" click={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>}
          </div>
        </Grid>
      </Grid>
    </section>
  )
}
