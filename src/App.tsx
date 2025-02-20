import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { PersonalInfo } from './components/PersonalInfo';
import { TravelPreferences } from './components/TravelPreferences';
import { HealthSafety } from './components/HealthSafety';
import { ProgressIndicator } from './components/ProgressIndicator';

interface FormData {
  fullName: string;
  dob: string;
  nationality: string;
  email: string;
  phone: string;
  departureDate: string;
  returnDate: string;
  accommodation: string;
  specialRequests: string;
  healthDeclaration: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactEmail: string;
  medicalConditions: string;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
  };

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="form-container">
      <ProgressIndicator currentStep={currentStep} totalSteps={3} />

      {submitted ? (
        <div className="success-message">
          Application submitted successfully! 🚀
        </div>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {currentStep === 1 && <PersonalInfo onNext={handleNext} />}
            {currentStep === 2 && (
              <TravelPreferences onNext={handleNext} onPrevious={handlePrevious} />
            )}
            {currentStep === 3 && <HealthSafety onPrevious={handlePrevious} />}
          </form>
        </FormProvider>
      )}
    </div>
  );
}