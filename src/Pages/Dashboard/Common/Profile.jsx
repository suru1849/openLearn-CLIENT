import useUser from "../../../Hooks/useUser";

const Profile = () => {
  const { role, email, phone, name, photo } = useUser();

  return (
    <div className="h-full flex justify-center  items-center border-2">
      <div className="bg-base-300 p-10 w-[90vw] md:w-[60vw] rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center p-5">
          {/* profile */}
          <div className="avatar ">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-10">
              <img src={photo} />
            </div>
          </div>
          {/* role */}
          <div className="bg-sky-400 w-[100px] text-center p-2 text-lg uppercase font-bold text-white my-5 rounded-md">
            {role}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:justify-around my-10">
          <div className="text-lg flex flex-col">
            <span className="text-gray-400 font-medium">Name</span>
            <span className="font-bold">{name}</span>
          </div>
          <div className="text-lg flex flex-col">
            <span className="text-gray-400 font-medium">Email</span>
            <span className="font-bold">{email}</span>
          </div>
          <div className="text-lg flex flex-col">
            <span className="text-gray-400 font-medium">Phone</span>
            <span className="font-bold">{phone ? phone : "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
