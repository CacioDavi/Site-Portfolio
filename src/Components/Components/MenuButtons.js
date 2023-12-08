import { useState } from "react";
import "../CSS/MenuButtons.css";

function MenuButtons({ desativar }) {
  const [disable, SetActive] = useState("Home");
  
  if (desativar !== disable) {
    SetActive(desativar);
    
  }else{}

  return (
    <nav>
      <ul id="topbarbuttons">
        <li className={disable === "Home" ? "active" : "inativo"}>
          <a href="/">
            HOME
          </a>
        </li>
        <li className={disable === "Portifolio" ? "active" : "inativo"}>
          <a href="/port">
            PORTIFOLIO
          </a>
        </li>
        <li className={disable === "Contatos" ? "active" : "inativo"}>
          <a href="/contact">CONTATO</a>
        </li>
        <li className={disable === "Sobre" ? "active" : "inativo"}>
          <a href="/about">SOBRE</a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuButtons;
