import MenuButtons from "../MenuButtons"
// import img from "./MyLogoSemNome.png"
import "../../CSS/Home.css";
import img2 from "../../../Imagens/caraNoPC.jpg"

function Home() {
    return (
        <div style={{}}>

            <MenuButtons desativar = "Home"/>

            <div style={{padding: "8vh 0 0"}}>

                <h1>Olá, meu nome é Cácio.</h1>

                <h3>Desenvolvedor web Front-end</h3>

                <img id="img" src={img2} alt="Um cara no PC"/>

                <p id="p-ap">Em busca de interfaces cativantes para elevar sua presença online? Especializado em HTML5, CSS e JavaScript, incluindo o poderoso React, estou aqui para transformar sua visão digital em realidade. Como podemos inovar juntos e criar uma experiência única para seus usuários? Explore meu portfólio e descubra como podemos elevar sua presença na web!</p>
            </div>

        </div>
    )
}

export default Home