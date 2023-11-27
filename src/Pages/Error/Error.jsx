import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>error</title>
      </Helmet>
      <div>
        <div className="w-[50%] min-h-screen flex flex-col justify-center mx-auto">
          <div className="text-4xl font-bold text-red-500 text-center">
            Error,oops 😢
          </div>
          <div className="flex justify-center gap-10">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline btn-warning my-8 text-center"
            >
              Back To Previous Page
            </button>
            <button
              onClick={() => navigate("/")}
              className="btn btn-outline btn-success my-8 text-white"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
