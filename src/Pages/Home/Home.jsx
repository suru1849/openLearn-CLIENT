import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Banner from "./Banner/Banner";
import BecomeInstructor from "./BecomeIstructior/BecomeInstructor";
import TotalStatistics from "./TotalStatistics/TotalStatistics";
import Collaborators from "./Collaborators/Collaborators";
import ContactUs from "./ContactUs/ContactUs";
import FeedBackCarousel from "../../Components/Carousel/FeedBackCarousel";
import Accrodion from "./Accrodion/Accrodion";
import Carousell from "../../Components/Carousel/Carousell";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>openLEARN | Home</title>
      </Helmet>
      {!user && <Banner />}
      <Carousell />
      <BecomeInstructor />
      <Collaborators />
      <ContactUs />
      <FeedBackCarousel />
      <TotalStatistics />
      <Accrodion />
    </>
  );
};

export default Home;
