import Navbar from './components/Navbar/Navbar';
import Overlay from './components/UI/Overlay';
import Video from './components/UI/Video';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

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
    </>
  );
}

export default App;
