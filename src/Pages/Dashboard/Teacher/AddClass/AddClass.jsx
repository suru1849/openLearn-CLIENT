import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { imageUpload } from "../../../../api/utils";
import Form from "./Form";
import { toast } from "react-hot-toast";
import { saveClass } from "../../../../api/class";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  const [uploadedImageName, setUploadedImageName] = useState(
    "Click To Uploaded Image"
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
    const image = form.image.files[0];

    const image_url = await imageUpload(image);

    const addedClass = {
      name,
      email,
      price,
      title,
      description,
      image: image_url?.data?.display_url,
      status: "pending",
      teacher: {
        image: user?.photoURL,
      },
      enroll: 0,
    };

    try {
      setLoading(true);
      // Save classed to the data base;
      await saveClass(addedClass);

      navigate("/dashboard/my-class");

      toast.success("Class Added! Please Wait For Admin Approvel");
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
    <div>
      <Helmet>
        <title>openLEARN | Dashboard-AddClass</title>
      </Helmet>
      <div className="h-[100%]">
        <Form
          handleUploadImage={handleUploadImage}
          uploadedImageName={uploadedImageName}
          handleSubmit={handleSubmit}
          loading={loading}
          label={"Add Class"}
        />
      </div>
    </div>
  );
};

export default AddClass;
