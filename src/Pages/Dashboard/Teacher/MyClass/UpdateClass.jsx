import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../../../Components/Container/Container";
import Form from "../AddClass/Form";
import { imageUpload } from "../../../../api/utils";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { updateClass } from "../../../../api/class";

const UpdateClass = () => {
  const data = useLoaderData();
  const [uploadedImageName, setUploadedImageName] = useState(
    data?.image.split("/")[data?.image.split("/").length - 1]
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0] || "empty";

    let image_URL = data?.image;
    if (image !== "empty") {
      const image_url = await imageUpload(image);
      image_URL = image_url?.data?.display_url;
    }

    const updatedClass = {
      name,
      email,
      price,
      title,
      description,
      image: image_URL,
      status: "pending",
    };

    try {
      setLoading(true);
      // Save classed to the data base;
      const obj = { addedClass: { ...updatedClass }, id: data?._id };
      await updateClass(obj);

      navigate("/dashboard/my-class");

      toast.success("Class Update Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Image Name
  const handleUploadImage = (image) => {
    setUploadedImageName(image.name);
  };

  return (
    <Container>
      <div className="font-bold text-2xl text-center p-5">Update Class</div>
      <Form
        label={"Update Class"}
        uploadedImageName={uploadedImageName}
        loading={loading}
        handleSubmit={handleSubmit}
        data={data}
        handleUploadImage={handleUploadImage}
      />
    </Container>
  );
};

export default UpdateClass;
