import axiosSecure from ".";

// get TOTAL users
export const getTotal = async () => {
  const { data } = await axiosSecure("/count");

  return data;
};
