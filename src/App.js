import Navbar from './components/Navbar/Navbar';
import Overlay from './components/UI/Overlay';
import Video from './components/UI/Video';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero>
        <Overlay />
        <Video />
      </Hero>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
