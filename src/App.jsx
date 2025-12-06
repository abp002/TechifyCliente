import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SmartphonesTablets from './pages/SmartphonesTablets';
import Smartphones from './pages/Smartphones';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartphones-tablets" element={<SmartphonesTablets />} />
        <Route path="/smartphones" element={<Smartphones />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
