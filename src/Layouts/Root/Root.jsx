import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";
import NavBar from "../../Components/Shared/NavBar/NavBar";
import Container from "../../Components/Container/Container";

const Root = () => {
  return (
    <Container>
      <NavBar />
      <div className="min-h-[calc(100vh-95px)]">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default Root;
