import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex justify-center items-center"
    >
      <div className="w-14 h-14">
        <img className="font-b" src={logo} alt="logo" />
      </div>
      <div className="text-gray-500 text-xl font-extrabold">
        open<span className="text-green-400">LEARN</span>
      </div>
    </div>
  );
};

export default Logo;
