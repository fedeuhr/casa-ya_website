import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import Promo from "./pages/Promo/Promo";
import Modelo from "./pages/Modelo/Modelo";
import Contacto from "./pages/Contacto/Contacto";
import NoEncontrado from "./pages/NoEncontrado/NoEncontrado";
import Buttons from "./components/WppButton/Buttons";

function App() {
  return (
    <BrowserRouter>
      <Buttons />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/modelo/:modelo" element={<Modelo />} />
        <Route exact path="/promo/:promo" element={<Promo />} />
        <Route
          exact
          path="/preguntas-frecuentes"
          element={<PreguntasFrecuentes />}
        />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
