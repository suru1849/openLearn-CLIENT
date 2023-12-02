import axiosSecure from ".";

// Save / Insert Class to the Data Base
export const saveClass = async (Class) => {
  const { data } = await axiosSecure.post("/classes", Class);

  return data;
};

// Update Class to the Data Base
export const updateClass = async ({ addedClass, id }) => {
  const { data } = await axiosSecure.put(`/class/${id}`, addedClass);

  return data;
};

// Get all Classes hosted My a Teacher
export const getAddedClass = async (email) => {
  const { data } = await axiosSecure(`/classes/${email}?status=pending`);

  if (!data) return [];

  return data;
};

// Get Single Classes hosted My a Teacher
export const getAClass = async (id) => {
  const { data } = await axiosSecure(`/class/${id}`);

  if (!data) return {};

  return data;
};

// Get Classes Depending on Status
export const getClassByStatus = async ({ status, skip, limit }) => {
  const { data } = await axiosSecure(
    `/classes?status=${status}&skip=${skip}&limit=${limit}`
  );

  if (!data) return [];

  return data;
};

// Get All Classes
export const getClasses = async () => {
  const { data } = await axiosSecure(`/classes`);

  if (!data) return [];

  return data;
};

// Deleted A Added Class
export const deleteClass = async (id) => {
  const { data } = await axiosSecure.delete(`/class/${id}`);

  return data;
};

// Get all classes(approved) sorted by enrollment
export const getSortedClass = async () => {
  const { data } = await axiosSecure("/classes/sort-by-enroll");

  return data;
};
