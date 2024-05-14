import CorpoLinguagem from "./CorpoLinguagem"

function CorpoStart(){

    function EscolhaDaLinguagem(){
        let Start = window.document.querySelector("div.CorpoStart")
        Start.style.display = "none"

        let ContainerLinguagem = window.document.querySelector("div.CorpoLinguagem")
        ContainerLinguagem.style.display = "block"
    }

    return(
        <div className="CorpoStart">
            <h1>Quiz do dev</h1>
            <p>Clique em <strong>COMEÇAR</strong></p>
            <p>Escolha uma <strong>LINGUAGEM</strong></p>
            <p>E <strong>BOA SORTE</strong></p>
            <input onClick={EscolhaDaLinguagem} type="button" value="COMEÇAR" />
        </div>
    )
}

export default CorpoStart