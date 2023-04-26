import Navbar from './components/Navbar/Navbar';
import Overlay from './components/UI/Overlay';
import Video from './components/UI/Video';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Hero>
        <Navbar />
        <Overlay />
        <Video />
      </Hero>
    </>
  );
}

export default App;
