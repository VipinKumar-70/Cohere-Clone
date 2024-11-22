import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import LogoCarousel from "./components/LogoCarousel";
import RetrievalModels from "./components/RetrievalModels";
import DeploymentOption from "./components/DeploymentOption";
import DeveloperResources from "./components/DeveloperResources";
import OurMission from "./components/OurMission";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <LogoCarousel />
      <Service />
      <RetrievalModels />
      <DeploymentOption />
      <DeveloperResources />
      <OurMission />
      <Footer />
    </>
  );
}

export default App;
