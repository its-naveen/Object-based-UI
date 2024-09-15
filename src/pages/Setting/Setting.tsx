import React from 'react';
import Grid from '@mui/material/Grid2';
import { capitalize } from 'lodash';

const Breadcrumb = React.lazy(() => import('../../customComponents/Breadcrumb/Breadcrumb'));

export default function Setting() {
  const [activeStep, setActiveStep] = React.useState(1);

  const breadcrumbOption = [
    {
      label: 'dashboard',
      link: '/',
    },
    {
      label: 'setting',
      link: '/setting',
    },
  ]

  const tabs = [
    {
      label: 'basic',
      step: 1,
    },
    {
      label: 'additional',
      step: 2,
    },
    {
      label: 'advance',
      step: 3,
    }
  ];

  const handleActiveStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleGetStepContent = () => {
    switch (activeStep) {
      case 1:
        return <h1>Basic Setting</h1>
      case 2:
        return <h1>Additional Setting</h1>
      case 3:
        return <h1>Advance Setting</h1>
      default:
        return <h1>Basic Setting</h1>
    }
  }

  return (
    <section className='setting'>
      <h1 className='title' role='setting title'>Setting</h1>
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
