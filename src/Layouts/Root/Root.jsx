import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      Root
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
