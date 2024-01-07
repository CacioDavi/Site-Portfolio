import "../CSS/Btn.css";
import javascript from "../../Imagens/JavaScript-logo.jpg"
import python from "../../Imagens/python_logo.png"


function Project({titulo, descricao, linguagem}) {
    function img(l) {

        descricao[0].toUpperCase()

        if(l === "javascript"){
            return javascript
        }else if(l === "python"){
            return python
        }
    }
    return (
        <li className="btn btn_type2">
            <a href="/" target="_blank" rel="noreferrer">

                <div>
                    <img src={img(linguagem)} width={"64px"} alt="linguagem usada no projeto"/>
                </div>
                
                <h2>
                    {titulo}
                </h2>
                <p>
                    {descricao}
                </p>

            </a>
        </li>
    )
}
export default Project