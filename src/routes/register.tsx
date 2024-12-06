import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: RegisterPage
})
function RegisterPage() {
    let navigate = useNavigate()

    let registerHandler = () => {
        navigate({to: "/"})
    }
    return<>
  
    <div>
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form>
            <table className="w-full">
              <tbody>
                <tr className="mb-4">
                  <td className="block text-gray-700 text-sm font-bold mb-2">
                    <label htmlFor="email">Email</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     
                    />
                  </td>
                </tr>

                <tr className="mb-4">
                  <td className="block text-gray-700 text-sm font-bold mb-2">
                    <label htmlFor="contactAddress">Contact Address</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contactAddress"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
                    />
                  </td>
                </tr>

                <tr className="mb-6">
                  <td className="block text-gray-700 text-sm font-bold mb-2">
                    <label htmlFor="gender">Gender</label>
                  </td>
                  <td>
                    <select
                      name="gender"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td  className="text-center col-span-2">
                    <button
                      type="button" 
                      className="bg-blue-500 text-white py-2 px-4 rounded"
                      onClick={registerHandler}
                    >
                      Register
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="text-center col-span-2">
                    <div className="flex items-center justify-center my-4">
                      <hr className="flex-grow border-gray-300" />
                      <span className="mx-4 text-gray-600">Already have an account?</span>
                      <span className="text-center">
                        <Link to='/login' className="text-blue-600 hover:underline">
                          Login
                        </Link>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      </div>
      </>
}