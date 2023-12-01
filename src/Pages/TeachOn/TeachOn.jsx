import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { getTeacherReq, teacherReq } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const TeachOn = () => {
  const { user } = useAuth();
  const [experience, setExperience] = useState("Select One");
  const [category, setCategory] = useState("Select One");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (experience === "Select One") {
      return toast.error("Experience Is Empty");
    }

    if (category === "Select One") {
      return toast.error("Category Is Empty");
    }

    const reqUser = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      experience,
      category,
      status: "pending",
    };

    try {
      // save req
      await teacherReq(reqUser);

      navigate("/");
      toast.success("Reqested Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const { data: status } = useQuery({
    enabled: !!user?.email,
    queryFn: async () => await getTeacherReq(user?.email),
    queryKey: ["status"],
  });

  return (
    <div className="min-h-screen flex justify-center items-center">
      <section className="w-[90%] min-h-[100%] my-10 rounded-md p-6 bg-gray-400 text-gray-50 ">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid md:py-24 grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-600">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <img
                className="w-40 h-40 rounded-xl mx-auto"
                src={user?.photoURL}
                alt=""
              />
              <p className="text-center font-bold text-lg">
                Your Personal Information
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4  col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-500 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Experience
                </label>
                <select
                  onChange={(e) => setExperience(e.target.value)}
                  className=" w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  defaultValue={experience}
                >
                  <option disabled>Select One</option>
                  <option>Experienced</option>
                  <option>Beginner</option>
                  <option>Some Idea</option>
                </select>
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Category
                </label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className=" w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  defaultValue={category}
                >
                  <option disabled>Select One</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Meachine Learing</option>
                  <option>Graphis Designing</option>
                  <option>Competetive Programming</option>
                </select>
              </div>
              <div className="col-span-full">
                <button
                  disabled={status === "pending" ? true : false}
                  type="submit"
                  className="btn btn-success w-full uppercase font-bold text-white"
                >
                  {status === "pending"
                    ? "Pending"
                    : status === "rejected"
                    ? "request to another button"
                    : "Submit For review"}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default TeachOn;
