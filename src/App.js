import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Components/Pages/Home";
import Portifolio from "./Components/Components/Pages/Portifolio";
import Contatos from "./Components/Components/Pages/Contatos";
import Sobre from "./Components/Components/Pages/Sobre";

function App() {
  // alert(process.env.PUBLIC_URL)


  return (
    <div className="app">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/port" element={<Portifolio />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/contact" element={<Contatos />} />
        </Routes>
      </HashRouter>


    </div>
  );
}

export default App;
