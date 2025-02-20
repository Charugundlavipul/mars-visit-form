import { useFormContext } from 'react-hook-form';
import { StepProps } from '../types';

export function HealthSafety({ onPrevious }: StepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="form-group">
        <label>Do you have any health concerns?</label>
        <select
          {...register('healthDeclaration', { required: 'Health declaration is required' })}
        >
          <option value="">Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        {errors.healthDeclaration && (
          <span className="error-message">{errors.healthDeclaration.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Emergency Contact Name</label>
        <input
          {...register('emergencyContactName', { required: 'Emergency contact name is required' })}
          placeholder="Enter emergency contact name"
        />
        {errors.emergencyContactName && (
          <span className="error-message">{errors.emergencyContactName.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Emergency Contact Phone</label>
        <input
          {...register('emergencyContactPhone', {
            required: 'Emergency contact phone is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Invalid phone number',
            },
          })}
          placeholder="Enter emergency contact phone"
        />
        {errors.emergencyContactPhone && (
          <span className="error-message">{errors.emergencyContactPhone.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Emergency Contact Email</label>
        <input
          {...register('emergencyContactEmail', {
            required: 'Emergency contact email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder="Enter emergency contact email"
        />
        {errors.emergencyContactEmail && (
          <span className="error-message">{errors.emergencyContactEmail.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Medical Conditions</label>
        <textarea
          {...register('medicalConditions')}
          placeholder="List any medical conditions"
        />
      </div>

      <div className="button-group">
        <button type="button" onClick={onPrevious} className="btn-secondary">
          Previous
        </button>
        <button type="submit" className="btn-primary">
          Submit Application
        </button>
      </div>
    </div>
  );
}