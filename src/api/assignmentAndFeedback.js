import axiosSecure from ".";

// Insert/update assigment
export const setAssignment = async (Class, id) => {
  const { data } = await axiosSecure.put(`/class/assignment/${id}`, Class);

  return data;
};

// Set FeedBack
export const setFeedBack = async (email, feedBack) => {
  const { data } = await axiosSecure.put(`feedBack/${email}`, feedBack);

  return data;
};

// Get feedBack by Class id
export const getFeedBack = async (id) => {
  const { data } = await axiosSecure(`feedBack/${id}`);

  return data;
};

// Get feedBack by Class id
export const getAllFeedBack = async () => {
  const { data } = await axiosSecure(`feedBacks`);

  return data;
};
