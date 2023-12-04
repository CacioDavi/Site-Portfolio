import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Portifolio from "./Components/Pages/Portifolio";
import Contatos from "./Components/Pages/Contatos";
import Sobre from "./Components/Pages/Sobre";

function App() {



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/port" element={<Portifolio />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/contact" element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
