import CorpoStart from "../CorpoStart"
function EndPY(){

    function VoltarAoInicio(){
        let EndPY = window.document.querySelector("div.EndPY")
        EndPY.style.display = "none"
        let CorpoStart = window.document.querySelector("div.CorpoStart")
        CorpoStart.style.display = "flex"
    }
    return(
        <div className="EndPY">
            <h1>O seu quiz de Python chegou ao fim!</h1>
            <p>Espero que tenha gostado!</p>
            <p>Gostaria de repetir?</p>
            <input onClick={VoltarAoInicio} type="button" value="CLIQUE AQUI" />
        </div>
    )
}

export default EndPY