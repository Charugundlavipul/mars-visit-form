import { useFormContext } from 'react-hook-form';
import { StepProps } from '../types';

export function TravelPreferences({ onNext, onPrevious }: StepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="form-group">
        <label>Departure Date</label>
        <input
          type="date"
          {...register('departureDate', { required: 'Departure date is required' })}
        />
        {errors.departureDate && (
          <span className="error-message">{errors.departureDate.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Return Date</label>
        <input
          type="date"
          {...register('returnDate', { required: 'Return date is required' })}
        />
        {errors.returnDate && (
          <span className="error-message">{errors.returnDate.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Accommodation Preference</label>
        <select
          {...register('accommodation', { required: 'Accommodation preference is required' })}
        >
          <option value="">Select</option>
          <option value="Space Hotel">Space Hotel</option>
          <option value="Martian Base">Martian Base</option>
        </select>
        {errors.accommodation && (
          <span className="error-message">{errors.accommodation.message?.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Special Requests</label>
        <textarea
          {...register('specialRequests')}
          placeholder="Any special requests?"
        />
      </div>

      <div className="button-group">
        <button type="button" onClick={onPrevious} className="btn-secondary">
          Previous
        </button>
        <button type="button" onClick={onNext} className="btn-primary">
          Next
        </button>
      </div>
    </div>
  );
}