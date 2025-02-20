export interface FormData {
    fullName: string;
    dob: string;
    nationality: string;
    email: string;
    phone: string;
    departureDate: string;
    returnDate: string;
    accommodation: string;
    specialRequests: string;
    healthDeclaration: boolean;
    emergencyContactName: string;
    emergencyContactPhone: string;
    emergencyContactEmail: string;
    medicalConditions: string;
  }
  
  export interface StepProps {
    onNext?: () => void;
    onPrevious?: () => void;
  }