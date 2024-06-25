import About from "./components/About";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import RoadMap from "./components/RoadMap";
import TokenOmics from "./components/TokenOmics";

export default function Home() {
  return (
    <main className="bg-black lg:max-w-4xl xl:max-w-6xl  mx-auto ">
      <Header />
      <HeroSection />
      <Partners />
      <About />
      <TokenOmics />
      <RoadMap />
      <FollowUs />
      <Footer />
    </main>
  );
}
