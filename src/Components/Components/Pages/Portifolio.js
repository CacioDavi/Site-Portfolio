import MenuButtons from "../MenuButtons";
// import Project from "../../JS/Project";
import "../../CSS/Portfolio.css";
import "../../CSS/Btn.css";

function Portifolio() {

  return (
    <div>
      <MenuButtons desativar="Portifolio" />
      <div className="port" style={{ padding: "8vh 0 0" }}>
        <h1>Meus Projetos!</h1>
        <div>
          <ul id="projects">
            <p>Não há Projetos agora, retorne em outro momento.</p>
            
          </ul>
          
        </div>

        <div className="space">
            <h1>Mais Projetos</h1>
            <a href="https://github.com/CacioDavi?tab=repositories" target="_blank" rel="noreferrer" id="btn-git" className="btn btn_type1">
              <span>
                <ion-icon ion-icon name="logo-github"></ion-icon>
                Github
              </span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Portifolio;
