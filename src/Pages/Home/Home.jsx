import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Helmet>
        <title>openLEARN | Home</title>
      </Helmet>
      <div>hHome</div>
    </>
  );
};

export default Home;
