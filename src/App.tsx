import "./App.css";
import Footer from "./components/common/Footer";

import Header from "./components/common/Header/Header";
import HowItWorks from "./components/common/Carrossel";
import ServicesNeed from "./components/common/ServicesNeed/ServicesNeed";

import Services from "./components/common/Services";
import Testimonials from "./components/common/Testimonials";
import Trust from "./components/common/Trust";
import SessionNever from "./components/common/Session-Never/SessionNever";
import Action from "./components/common/Action/Action";
import Differences from "./components/common/Differences/Differences";

function App() {
  return (
    <>
      <main>
    <title> Caetano Hidráulica</title>
    <meta name="Keywords" content="HTML, TAILWIND, REACT,JAVASCRIPT " />
    <meta name="Hidraulica Residencial Araçatuba-SP" content="hydraulics, Caetano, services" />
    <meta name="author" content="Tiago Carvalho" />
      </main>

      <Header />
      <HowItWorks />
      <ServicesNeed />
      <SessionNever />
      <Differences />
      <Action />
      <Services />
      <Trust />
      <Footer />

      {/* Add your page content here */}
    </>
  );
}

export default App;
