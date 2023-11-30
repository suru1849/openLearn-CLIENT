import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Banner from "./Banner/Banner";
import BecomeInstructor from "./BecomeIstructior/BecomeInstructor";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Helmet>
        <title>openLEARN | Home</title>
      </Helmet>
      <Banner />
      <BecomeInstructor />
    </>
  );
};

export default Home;
