import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().positive('Age must be a positive number'),
  contact: z.string().min(1, 'Contact is required'),
  genderMale: z.boolean().optional(),
  genderFemale: z.boolean().optional(),
  country: z.string().min(1, 'Country is required'),
  preference: z.enum(['Yes', 'No'], {
    errorMap: () => ({ message: 'Preference is required' }),
  }),
  comments: z.string().optional(),
})

export const Route = createFileRoute('/zodForm')({
  component: Form,
})

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: any) => {
    try {
      const parsedData = formSchema.parse(data)
      console.log('Parsed Data:', parsedData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation Error:', error.errors)
      } else {
        console.error('Unknown error occurred:', error)
      }
    }
  }

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
                  {...register('name')}
                />
                {errors.name && <span>{String(errors.name.message)}</span>} 
              </td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>
                <input
                  type="number"
                  placeholder="Enter your age"
                  {...register('age', { valueAsNumber: true })}
                />
                {errors.age && <span>{String(errors.age.message)}</span>} 
              </td>
            </tr>
            <tr>
              <td>Contact:</td>
              <td>
                <input
                  type="number"
                  placeholder="Enter your contact"
                  {...register('contact')}
                />
                {errors.contact && <span>{String(errors.contact.message)}</span>} 
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <label>
                  <input type="checkbox" {...register('genderMale')} />
                   Male
                </label>
                <label>
                  <input type="checkbox" {...register('genderFemale')} />
                  Female
                </label>
              </td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>
                <select {...register('country')}>
                  <option value="">Select your country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                </select>
                {errors.country && <span>{String(errors.country.message)}</span>} 
              </td>
            </tr>
            <tr>
              <td>Preference:</td>
              <td>
                <label>
                  <input type="radio" value="Yes" {...register('preference')} />
                  Yes
                </label>
                <label>
                  <input type="radio" value="No" {...register('preference')} />
                  No
                </label>
                {errors.preference && <span>{String(errors.preference.message)}</span>} 
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
            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
