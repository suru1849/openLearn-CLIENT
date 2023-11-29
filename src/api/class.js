import axiosSecure from ".";

// Save / Insert Class to the Data Base
export const saveClass = async (Class) => {
  const { data } = await axiosSecure.post("/classes", Class);

  return data;
};

// Update Class to the Data Base
export const updateClass = async ({ addedClass, id }) => {
  const { data } = await axiosSecure.put(`/classes/${id}`, addedClass);

  return data;
};

// Get all Classes hosted My a Teacher
export const getAddedClass = async (email) => {
  const { data } = await axiosSecure(`/classes/${email}`);

  if (!data) return [];

  return data;
};

// Get all Classes hosted My a Teacher
export const getAClass = async (id) => {
  const { data } = await axiosSecure(`/class/${id}`);

  if (!data) return [];

  return data;
};
