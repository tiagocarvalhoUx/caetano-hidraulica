import "./App.css";
import Footer from "./components/common/Footer";

import Header from "./components/common/Header/Header";
import HowItWorks from "./components/common/Carrossel";
import ServicesNeed from "./components/common/ServicesNeed/ServicesNeed";

import Services from "./components/common/Services";
import Testimonials from "./components/common/Testimonials";
import Trust from "./components/common/Trust";
import SessionNever from "./components/common/Session-Never/SessionNever";

function App() {
  return (
    <>
      <Header />
      <HowItWorks />
      <ServicesNeed />
      <SessionNever />
      <Services />
      <Testimonials />
      <Trust />
      <Footer />

      {/* Add your page content here */}
    </>
  );
}

export default App;
