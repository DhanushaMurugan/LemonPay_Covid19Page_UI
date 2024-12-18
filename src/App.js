import './App.css';
import './index.css'
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RegistrationImageBanner from './components/RegistrationImageBanner';
import CustomerTestimonial from './components/CustomerTestimonial';
import SymptomView from './components/SymptomView';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App ">
      <Header/>
      <Banner/>
      <Features/>
      <HeroSection/>
      <RegistrationImageBanner/>
      <SymptomView/>
      <CustomerTestimonial/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
