import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { imageUpload } from "../../api/utils";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner10 } from "react-icons/im";
import LoadingBtn from "../../Components/LoadingBtn/LoadingBtn";

const SignUp = () => {
  const { loading } = useAuth();
  const [uploadedImageText, setUploadedImageText] = useState(
    "Click To Upload Image"
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    const currentUser = {
      name,
      email,
      password,
      image,
    };

    const imageURL = await imageUpload(image);
    console.log(imageURL);

    console.log(currentUser);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col min-w-[30vw] p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 bg-base-200 border-[1px] shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up to explore openLEARN
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="type your name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="type your email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                required
              />
            </div>
            <div className="mt-4 px-3 py-2 border-[3px] border-dotted rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 flex justify-center">
              <label
                htmlFor="image"
                className="bg-red-300 px-4 font-bold rounded-md"
              >
                {uploadedImageText}
              </label>
              <input
                onChange={(e) => setUploadedImageText(e.target.files[0].name)}
                className="hidden"
                type="file"
                name="image"
                id="image"
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
                className="btn w-full  btn-warning text-white"
              >
                <LoadingBtn
                  isLoading={loading}
                  label={"Register"}
                  icon={ImSpinner10}
                />
              </button>
              <button type="button" className="btn w-full  btn-outline ">
                <FcGoogle size={24} />
                Sing In with Google
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                rel="noopener noreferrer"
                className="text-red-500"
              >
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
