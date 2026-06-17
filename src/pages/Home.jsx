import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import ShopByOccasion from "../components/ShopByOccasion";
import NewArrivals from "../components/NewArrivals";
import WhyChooseUs from "../components/WhyChooseUs";
import TrendingColors from "../components/TrendingColors";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroBanner />
      <ShopByOccasion />
      <NewArrivals />
      <WhyChooseUs />
      <TrendingColors />
      <Footer />
    </>
  );
}

export default Home;