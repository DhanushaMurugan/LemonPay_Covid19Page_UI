
import './App.css';
import './index.css'
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RegistrationImageBanner from './components/RegistrationImageBanner';
import CustomerTestimonial from './components/CustomerTestimonial';


function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <HeroSection/>
      <CustomerTestimonial/>
      {/* <RegistrationImageBanner/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
