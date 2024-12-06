import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: LoginPage
})
function LoginPage() {
  let navigate = useNavigate()

  let loginHandler = () => {
    navigate({ to: "/dashboard" })
  }
  return <>
    <div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form >
            <table className="w-full">
              <tbody>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"

                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  </td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"

                    />
                  </td>
                </tr>
                <tr>
                  <td className='colspan=2'>
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
                      onClick={loginHandler}
                    >
                      login
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="flex items-center justify-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-600">Don't have an account?</span>


            <span className="text-center">
              <a href="#" className="text-blue-600 hover:underline">
                <Link className='' to='/register'>Register </Link></a>
            </span>
          </div> </div>
      </div>
    </div></>

}