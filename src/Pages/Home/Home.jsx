import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Banner from "./Banner/Banner";
import BecomeInstructor from "./BecomeIstructior/BecomeInstructor";
import TotalStatistics from "./TotalStatistics/TotalStatistics";

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
      <TotalStatistics />
    </>
  );
};

export default Home;
