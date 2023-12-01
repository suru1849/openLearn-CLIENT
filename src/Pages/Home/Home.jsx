import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Banner from "./Banner/Banner";
import BecomeInstructor from "./BecomeIstructior/BecomeInstructor";
import TotalStatistics from "./TotalStatistics/TotalStatistics";
import Collaborators from "./Collaborators/Collaborators";
import ContactUs from "./ContactUs/ContactUs";
import Carousel from "../../Components/Carousel/Carousel";
import FeedBackCarousel from "../../Components/Carousel/FeedBackCarousel";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>openLEARN | Home</title>
      </Helmet>
      <Banner />
      <Carousel />
      <BecomeInstructor />
      <Collaborators />
      <ContactUs />
      <FeedBackCarousel />
      <TotalStatistics />
    </>
  );
};

export default Home;
