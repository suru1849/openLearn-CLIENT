import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Banner from "./Banner/Banner";
import BecomeInstructor from "./BecomeIstructior/BecomeInstructor";
import TotalStatistics from "./TotalStatistics/TotalStatistics";
import Collaborators from "./Collaborators/Collaborators";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>openLEARN | Home</title>
      </Helmet>
      <Banner />
      <BecomeInstructor />
      <Collaborators />
      <TotalStatistics />
      <ContactUs />
    </>
  );
};

export default Home;
