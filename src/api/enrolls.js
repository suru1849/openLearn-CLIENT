import axiosSecure from ".";

// Create Payment Intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);

  return data;
};

// Save enroll Classes to the data base
export const saveEnroll = async (enrollClass) => {
  const { data } = await axiosSecure.post("/enrolls", enrollClass);

  return data;
};

// update enrollment number of class
export const updateClassEnrollment = async (Class) => {
  const { data } = await axiosSecure.put(
    `/class/update/enrollment/${Class?._id}`,
    Class
  );

  console.log(Class);

  return data;
};
