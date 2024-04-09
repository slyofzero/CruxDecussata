import XChain from "./components/XChain";
import Hero from "./components/Hero";
import NFTs from "./components/NFTs";
import Roadmap from "./components/Roadmap";
import XMessenger from "./components/XMessenger";
import VideoComponent from "./components/Video";
import Branding from "./components/Branding";
import Buy from "./components/Buy";
import Chains from "./components/Chains";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] min-h-full">
      <Header />
      <Hero />
      <VideoComponent />
      <Branding />
      <XChain />
      <XMessenger />
      <NFTs />
      <Chains />
      <Roadmap />
      <Buy />
      <Footer />
    </div>
  );
};

export default App;
