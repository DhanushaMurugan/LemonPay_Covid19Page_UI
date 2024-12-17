
import './App.css';
import './index.css'
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Features/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
