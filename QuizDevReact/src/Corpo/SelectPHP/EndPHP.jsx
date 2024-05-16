import CorpoStart from "../CorpoStart"
function EndPHP(){

    function VoltarAoInicio(){
        let EndPHP = window.document.querySelector("div.EndPHP")
        EndPHP.style.display = "none"
        let CorpoStart = window.document.querySelector("div.CorpoStart")
        CorpoStart.style.display = "flex"
    }
    return(
        <div className="EndPHP">
            <h1>O seu quiz de PHP chegou ao fim!</h1>
            <p>Espero que tenha gostado!</p>
            <p>Gostaria de repetir?</p>
            <input onClick={VoltarAoInicio} type="button" value="CLIQUE AQUI" />
        </div>
    )
}

export default EndPHP