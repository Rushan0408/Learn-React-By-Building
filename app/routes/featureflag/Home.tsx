import FeaturedFlag from "./component/FeaturedFlag";
import { FeaturedFlagProvider } from "./context/FeaturedFlagContext";

const Home = () => {
  return (
    <FeaturedFlagProvider>
      <FeaturedFlag />
    </FeaturedFlagProvider>
  );
};

export default Home;
