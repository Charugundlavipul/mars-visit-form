import { useFormContext } from 'react-hook-form';
import { StepProps } from '../types';

export function PersonalInfo({ onNext }: StepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="form-group">
        <label>Full Name</label>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <span className="error-message">{errors.fullName.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          {...register('dob', { required: 'Date of birth is required' })}
        />
        {errors.dob && (
          <span className="error-message">{errors.dob.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Nationality</label>
        <input
          {...register('nationality', { required: 'Nationality is required' })}
          placeholder="Enter your nationality"
        />
        {errors.nationality && (
          <span className="error-message">{errors.nationality.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="error-message">{errors.email.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Invalid phone number',
            },
          })}
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <span className="error-message">{errors.phone.message?.toString()}</span>
        )}
      </div>

      <div className="button-group">
        <button type="button" onClick={onNext} className="btn-primary">
          Next
        </button>
      </div>
    </div>
  );
}