import FirstQPHP from "./FirstQPHP"
function SelectPHP(){
    function PrimeiraQuestion(){
        let SelectPHP = window.document.querySelector("div.SelectPHP")
        SelectPHP.style.display = "none"
        let FirstQPHP = window.document.querySelector("div.FirstQPHP")
        FirstQPHP.style.display = "block"
    }
    return(
        <div className="SelectPHP">
            <h1>O seu quiz de <strong>PHP</strong></h1>
            <p>VAI COMEÇAR</p>
            <input onClick={PrimeiraQuestion} type="button" value="START" />
        </div>
    )
}

export default SelectPHP