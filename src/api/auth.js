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
  return data;
};

// Get save a user form the Data-Base
export const getUser = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return { ...data };
};

// Get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure(`/users`);
  return data;
};

// Update User Role
export const updateRole = async ({ user, Role }) => {
  const updateUser = {
    email: user?.email,
    name: user?.name,
    phone: user?.phone,
    photo: user?.photo,
    status: user?.status,
    role: Role,
  };

  const { data } = await axiosSecure.put(
    `/user/update/${user?.email}`,
    updateUser
  );
  console.log(updateUser);

  return data;
};

// Save Teacher Request
export const teacherReq = async (user) => {
  const currentUser = {
    name: user?.name,
    email: user?.email,
    experience: user?.experience,
    category: user?.category,
    image: user?.image,
    status: user?.status,
  };

  const { data } = await axiosSecure.put(
    `/teacher-req/${user?.email}`,
    currentUser
  );

  return data;
};

// Get A Teacher Requests
export const getTeacherReq = async (email) => {
  const { data } = await axiosSecure(`/teacher-reqs/${email}`);

  if (!data?.status) return null;

  return data.status;
};

// Get ALL Teacher Requests
export const getAllTeacherReq = async () => {
  const { data } = await axiosSecure(`/teacher-reqs`);

  return data;
};

// Update Status of requested teacher
export const updateReqStatus = async ({ user, status }) => {
  const updateUser = {
    email: user?.email,
    name: user?.name,
    image: user?.image,
    experience: user?.experience,
    category: user?.category,
    status: status,
  };

  const { data } = await axiosSecure.put(
    `/teacher-req/update/${user?.email}`,
    updateUser
  );

  return data;
};
