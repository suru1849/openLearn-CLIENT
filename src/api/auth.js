import axiosSecure from ".";

// Save User in DataBase with role
export const saveUser = async (email, photo, name, phone) => {
  const currentUser = {
    name,
    photo,
    phone,
    email,
    role: "student",
    status: "verified",
  };

  const { data } = await axiosSecure.put(`/users/${email}`, currentUser);

  return data;
};

// Get Token form the server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", { email });

  return data;
};

// Clear Token/Cookie
export const clearToken = async () => {
  const { data } = axiosSecure("/logout");
  console.log("Token Clear --> ", data);
  return data;
};

// Get save a user form the Data-Base
export const getUser = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return { ...data };
};
