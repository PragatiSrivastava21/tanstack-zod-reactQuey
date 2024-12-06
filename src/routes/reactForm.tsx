import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

export const Route = createFileRoute('/reactForm')({
  component: Form,
});



function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p></p>
                )}
              </td>
            </tr>
            <tr>
                <td>Age:</td>
                <input
                type='number'
                placeholder='enter your age'
                {...register('age', { valueAsNumber: true })} />
            </tr>

            <tr>
              <td>Contact:</td>
              <td>
                <input
                  type="number"
                  placeholder="Enter your contact"
                  {...register('contact', { required: 'Contact is required' })}
                />
                {errors.contact && (
                  <p>{errors.contact?.message + ""}</p>
                )}
              </td>
            </tr>

            <tr>
              <td>Gender:</td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    {...register('genderMale')}
                  />
                  Male
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    {...register('genderFemale')}
                  />
                  Female
                </label>
              </td>
            </tr>

            <tr>
              <td>Country:</td>
              <td>
                <select
                  {...register('country', { required: 'Country is required' })}
                >
                  <option value="">Select your country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                </select>
                {errors.country && (
                  <p></p>
                )}
              </td>
            </tr>

            <tr>
              <td>Preference:</td>
              <td>
                <label>
                  <input
                    type="radio"
                    value="Yes"
                    {...register('preference', { required: 'Preference is required' })}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="No"
                    {...register('preference', { required: 'Preference is required' })}
                  />
                  No
                </label>
                {errors.preference && (
                  <p></p>
                )}
              </td>
            </tr>

            <tr>
              <td>Comments:</td>
              <td>
                <textarea
                  rows={5}
                  {...register('comments')}
                  placeholder="Enter your comments"
                />
              </td>
            </tr>

            {/* Submit Button */}
            <tr>
              <td></td>
              <td>
                <button type="submit">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

