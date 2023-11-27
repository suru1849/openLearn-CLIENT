import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const currentUser = {
      email,
      password,
    };

    console.log(currentUser);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col min-w-[30vw] p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 bg-base-200 border-[1px] shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign In</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="type your email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="space-y-3">
              <button
                type="submit"
                className="btn w-full  btn-success text-white"
              >
                Sign In
              </button>
              <button type="button" className="btn w-full  btn-outline ">
                <FcGoogle size={24} />
                Sing In with Google
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Don&apos;t have an account yet?{" "}
              <Link
                to="/signup"
                rel="noopener noreferrer"
                className="text-red-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
