import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SmartphonesTablets from './pages/SmartphonesTablets';
import Smartphones from './pages/Smartphones';
import Tablets from './pages/Tablets';
import Ordenadores from './pages/Ordenadores';
import Portatiles from './pages/Portatiles';
// import Pc from './pages/Pc';
// import PcGaming from './pages/PcGaming';
// import AccesoriosSmartphones from './pages/AccesoriosSmartphones';
// import Ebooks from './pages/Ebooks';
// import PlacasBase from './pages/PlacasBase';
// import Procesadores from './pages/Procesadores';
// import Ram from './pages/Ram';
// import Almacenamiento from './pages/Almacenamiento';
// import TarjetasGraficas from './pages/TarjetasGraficas';
// import Refrigeracion from './pages/Refrigeracion';
// import Torres from './pages/Torres';
// import FuentesAlmacenamiento from './pages/FuentesAlmacenamiento';
// import Ratones from './pages/Ratones';
// import Teclados from './pages/Teclados';
// import Audio from './pages/Audio';
// import Cables from './pages/Cables';
// import Sillas from './pages/Sillas';
// import Ps5 from './pages/Ps5';
// import Xbox from './pages/Xbox';
// import Switch from './pages/Switch';
// import ConsolasPortatiles from './pages/ConsolasPortatiles';
 import Pantallas from './pages/Pantallas';
// import Tv from './pages/Tv';
// import AccesoriosTv from './pages/AccesoriosTv';
// import Proyeccion from './pages/Proyeccion';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/smartphones-tablets" element={<SmartphonesTablets />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/portatiles" element={<Portatiles />} />
        <Route path="/ordenadores" element={<Ordenadores />} />
        <Route path="/pantallas" element={<Pantallas />} />



        {/* <Route path="/ordenadores" element={<Ordenadores />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/pc-gaming" element={<PcGaming />} />

        <Route path="/accesorios-smartphones" element={<AccesoriosSmartphones />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/placas-base" element={<PlacasBase />} />
        <Route path="/procesadores" element={<Procesadores />} />
        <Route path="/ram" element={<Ram />} />
        <Route path="/almacenamiento" element={<Almacenamiento />} />
        <Route path="/tarjetas-graficas" element={<TarjetasGraficas />} />
        <Route path="/refrigeracion" element={<Refrigeracion />} />
        <Route path="/torres" element={<Torres />} />
        <Route path="/fuentes-almacenamiento" element={<FuentesAlmacenamiento />} />

        <Route path="/ratones" element={<Ratones />} />
        <Route path="/teclados" element={<Teclados />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/cables" element={<Cables />} />
        <Route path="/sillas" element={<Sillas />} />

        <Route path="/ps5" element={<Ps5 />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/consolas-portatiles" element={<ConsolasPortatiles />} />

        <Route path="/tv" element={<Tv />} />
        <Route path="/accesorios-tv" element={<AccesoriosTv />} />
        <Route path="/proyeccion" element={<Proyeccion />} /> */}

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
