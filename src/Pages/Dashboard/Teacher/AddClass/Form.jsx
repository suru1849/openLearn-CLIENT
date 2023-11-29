/* eslint-disable react/prop-types */
import LoadingBtn from "../../../../Components/LoadingBtn/LoadingBtn";
import useAuth from "../../../../Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";

const Form = ({
  handleUploadImage,
  uploadedImageName,
  handleSubmit,
  loading,
  label,
  data,
}) => {
  const { user } = useAuth();

  return (
    <div className="bg-green-50 p-5">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* title */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="title"
              defaultValue={data?.title}
              className="input input-bordered"
              required
            />
          </div>
          {/* Email */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              readOnly
            />
          </div>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              readOnly
            />
          </div>
          {/* price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={data?.price}
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
          {/* Image upload */}
          <div className="form-control p-5 border-4 border-dotted rounded-lg flex justify-center items-center bg-white col-span-2">
            <label
              htmlFor="files"
              className="w-fit rounded-sm px-4 bg-red-400 font-bold text-lg text-white"
            >
              {uploadedImageName}
            </label>
            <input
              id="files"
              onChange={(e) => handleUploadImage(e.target.files[0])}
              name="image"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          {/* Description */}
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              className="rounded-md"
              defaultValue={data && data?.description}
              name="description"
              rows={5}
            ></textarea>
          </div>
        </div>
        <div className=" my-10 ">
          <button className="btn w-full bg-red-300 font-bold" type="submit">
            <LoadingBtn label={label} isLoading={loading} icon={ImSpinner9} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
