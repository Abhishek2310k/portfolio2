import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Parallax from './Components/Parallax/Parallax';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Services'><Parallax type="services"/></section>
      <section><Services/></section>
      <section id='Portfolio'><Parallax type="portfolio"/></section>
        <Portfolio/>
      <section id='Contact'><Contact/></section>
      {/* <section id='About'>About</section> */}
    </div>
  );
}

// const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

export default App;
