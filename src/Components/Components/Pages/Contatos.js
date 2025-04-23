// Área para as pessoas conversarem comigo caso queiram-
// tirar dúvidas ou precisarem de algum serviço

import MenuButtons from "../MenuButtons" // Este é o import do menu de navegação ou "nav"
import "../../CSS/Contato.css" // import do css da sessão
import "../../CSS/Btn.css"
// Função responsável por gerar o conteúdo desta sessão
function Contatos() {

    //Função para checar se o usuário está usando um celular ou PC
    function HandleVerificar() {
        
        // Checagem
        function isMobile() {
            return /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
        }
        let href;
        // O que fazer
        if(isMobile()){
            href = "https://api.whatsapp.com/send?phone=558587787727&text=Olá Cácio, eu quero falar com você sobre...%0A%0A"
        }else{
            href = "https://web.whatsapp.com/send?phone=558587787727&text=Olá Cácio, eu quero falar com você sobre...%0A%0A"
        }

        return href
    }

    let link = HandleVerificar();

    //Html
    return (
        <div>
            
            <MenuButtons desativar="Contatos"/> {/* botões de navegação */}
            <div style={{padding: "8vh 0 0"}}> {/*conteúdo da div*/}

                <h1>Fale Comigo!</h1> {/* Título */}

                <ul id="contacts">
                    <li>
                        <a href={link} target="_blank" rel="noreferrer" id="btn-whats" className="btn btn_type1">
                    
                            <span>
                                <ion-icon ion-icon name="logo-whatsapp"></ion-icon>
                                Whatsapp
                            </span>
                        </a> {/* Whatsapp */}
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/cacios/" target="_blank" rel="noreferrer" id="btn-linkedin" className="btn btn_type1">
                    
                            <span>
                                <ion-icon ion-icon name="logo-linkedin"></ion-icon>
                                Linkedin
                            </span>
                        </a> {/* Linkedin */}
                    </li>
                </ul>

            </div>
        </div>
    )
}


export default Contatos
