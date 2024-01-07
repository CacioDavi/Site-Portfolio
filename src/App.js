import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Components/Pages/Home";
import Portifolio from "./Components/Components/Pages/Portifolio";
import Contatos from "./Components/Components/Pages/Contatos";
import Sobre from "./Components/Components/Pages/Sobre";

function App() {



  return (
    <div className="app">
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="port" element={<Portifolio />} />
          <Route path="about" element={<Sobre />} />
          <Route path="contact" element={<Contatos />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
