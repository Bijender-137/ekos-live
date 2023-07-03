
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HeroSection from "./components/HeroSection";
import Ekolive from "./components/Ekolive";
import About from "./components/About";
import OurFeatures from "./components/OurFeatures";
import Plateforms from "./components/Plateforms";
import Integrations from "./components/Integrations";
import Observatory from "./components/Observatory";
import MyFooter from "./components/MyFooter";
import PricingPlan from "./components/PricingPlan";
import Community from "./components/Community";
import VidioSection from "./components/VidioSection";
import '@splidejs/splide/css';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
import Preloader_img from "./assets/img/svg/page_logo.svg"
function App() {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 4000);
  }, []);
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    
    <div className="bg-black overflow-hidden">
       {loader ? (
        <div className="bg-black vh-100 d-flex align-items-center justify-content-center">
          <div className="preloader">
            <img src={Preloader_img} alt="Preloader_img" />
          </div>
        </div>
      ) : (
        <>
            <div className="overflow-hidden">
          <HeroSection />
      <Ekolive />
      <About />
      <OurFeatures/>
      <Plateforms />
      <Integrations />
      <Observatory />
      <Community />
      <PricingPlan/>
      <VidioSection/>
      <MyFooter />
      <BackToTop/>
          </div>
        </>
      )}

      {/* <MyNav/>
      <HeroSection />
      <Ekolive />
      <About />
      <OurFeatures/>
      <Plateforms />
      <Integrations />
      <Observatory />
      <Community />
      <PricingPlan/>
      <VidioSection/>
      <MyFooter />
      <BackToTop/> */}
    </div>
  );
}

export default App;
