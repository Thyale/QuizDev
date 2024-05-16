import CorpoStart from "../CorpoStart"
function EndJS(){
    function VoltarAoInicio(){
        let EndJS = window.document.querySelector("div.EndJS")
        EndJS.style.display = "none"
        let CorpoStart = window.document.querySelector("div.CorpoStart")
        CorpoStart.style.display = "flex"
    }
    return(
        <div className="EndJS">
            <h1>O seu quiz de JavaScript chegou ao fim!</h1>
            <p>Espero que tenha gostado!</p>
            <p>Gostaria de repetir?</p>
            <input onClick={VoltarAoInicio} type="button" value="CLIQUE AQUI" />
        </div>
    )
}

export default EndJS