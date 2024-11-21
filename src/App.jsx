import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import LogoCarousel from "./components/LogoCarousel";
import RetrievalModels from "./components/RetrievalModels";
import DeploymentOption from "./components/DeploymentOption";
import DeveloperResources from "./components/DeveloperResources";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <LogoCarousel />
      <Service />
      <RetrievalModels />
      <DeploymentOption />
      <DeveloperResources />
    </>
  );
}

export default App;
