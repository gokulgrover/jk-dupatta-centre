import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import ShopByOccasion from "../components/ShopByOccasion";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroBanner />
      <ShopByOccasion />
      <NewArrivals />
      <Footer />
    </>
  );
}

export default Home;