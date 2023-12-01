import microsoft from "../../../assets/micro.png";
import GfG from "../../../assets/GfG.png";
import google from "../../../assets/google-logo-28FA7991AF-seeklogo.com.png";
import ph from "../../../assets/ph.jpeg";
import coursera from "../../../assets/coursera.png";

const Collaborators = () => {
  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold text-center my-10">
        Meet Our Official Partner&apos;s
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <figure className="w-24 h-24 flex">
            <img
              className="object-center"
              src={microsoft}
              alt="collaborators"
            />
          </figure>
          <h2 className="font-bold text-sm text-center my-2">Microsoft</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <figure className="w-24 h-24 flex">
            <img className="object-center" src={GfG} alt="collaborators" />
          </figure>
          <h2 className="font-bold text-sm text-center my-2">GeeksforGeeks</h2>
        </div>
        <div className="flex flex-col justify-center items-center my-2">
          <figure className="w-24 h-24 flex">
            <img className="object-center" src={google} alt="collaborators" />
          </figure>
          <h2 className="font-bold text-sm text-center my-2">Google</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <figure className="w-24 h-24 flex">
            <img className="object-center" src={ph} alt="collaborators" />
          </figure>
          <h2 className="font-bold text-sm text-center my-2">
            Programming Hero
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <figure className="w-24 h-24 flex">
            <img className="object-center" src={coursera} alt="collaborators" />
          </figure>
          <h2 className="font-bold text-sm text-center my-2">Coursera</h2>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
