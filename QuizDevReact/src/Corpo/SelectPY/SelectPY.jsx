import FirstQPY from "./FirstQPY"

function SelectPY(){

    function PrimeiraPergunta(){
        let ComecoPy = window.document.querySelector("div.SelectPY")
        ComecoPy.style.display = "none"

        let FirstQPY = window.document.querySelector("div.FirstQPY")
        FirstQPY.style.display = "block"
    }

    return(
        <div className="SelectPY">
            <h1>O seu quiz de <strong>PYHTON</strong></h1>
            <p>VAI COMEÇAR</p>
            <input onClick={PrimeiraPergunta} type="button" value="START" />
        </div>
    )
}

export default SelectPY