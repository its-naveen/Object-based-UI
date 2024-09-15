import { capitalize } from 'lodash';
import React from 'react';

interface StepperProps {
  steps: any[];
  activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <section className="stepper-container">
      {steps.map((step, index) => (
        <div key={index} className="step-container">
          <div className="step-indicator-wrapper">
            <div
              className={`step-indicator ${
                activeStep === index
                  ? 'active-step' // Active step color
                  : activeStep > index
                  ? 'completed-step' // Completed step color
                  : 'inactive-step' // Inactive step color
              }`}
            >
              {index + 1}
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`vertical-line ${
                  activeStep > index ? 'completed-line' : 'inactive-line'
                }`}
              />
            )}
          </div>
          <div className={`step-label ${activeStep === index ? 'active-label' : ''}`}>
            {capitalize(step.label)}
          </div>
        </div>
      ))}

      {activeStep === steps.length && (
        <div className='stepper-complition-msg'>
          <p>All steps completed</p>
        </div>
      )}
    </section>
  );
};

export default Stepper;
