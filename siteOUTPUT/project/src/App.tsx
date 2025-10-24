import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import NossaEquipe from './sections/NossaEquipe';
import NossoRobo from './sections/NossoRobo';
import Patrocinadores from './sections/Patrocinadores';
import Conquistas from './sections/Conquistas';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <NossaEquipe />
      <NossoRobo />
      <Patrocinadores />
      <Conquistas />
      <Footer />
    </div>
  );
}

export default App;
