import { useState } from "react"
import EndPHP from "./EndPHP"

function ThursdayQPHP(){

    const [respostaPHP5, setRespostaPHP5] = useState("")

    function EnviarResPHP5(){
        let BtnEnvioPHP5 = window.document.querySelector("input.BtnEnvioPHP5")
        BtnEnvioPHP5.style.display = "none"
        let BtnNextPHP5 = window.document.querySelector("input.BtnNextPHP5")
        BtnNextPHP5.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPHP5"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PHP5B') {
            setRespostaPHP5("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPHP5("Opss! Você errou! A resposta certa era a letra B")
        }
    }

    function ProximaQPHP5(){
        let ThursdayQPHP = window.document.querySelector("div.ThursdayQPHP")
        ThursdayQPHP.style.display = "none"
        let EndPHP = window.document.querySelector("div.EndPHP")
        EndPHP.style.display = "block"

        let BtnEnvioPHP5 = window.document.querySelector("input.BtnEnvioPHP5")
        BtnEnvioPHP5.style.display = "block"
        let BtnNextPHP5 = window.document.querySelector("input.BtnNextPHP5")
        BtnNextPHP5.style.display = "none"
        setRespostaPHP5("")
    }

    return(
        <div className="ThursdayQPHP">
            <p>Qual é a diferença entre echo e print em PHP?</p>
            <div>
                <label htmlFor="PHP5A">"Echo" é mais lento que "print"</label>
                <input type="radio" name="questionPHP5" id="PHPPHP5A" />
            </div>
            <div>
                <label htmlFor="PHP5B">"Echo" pode receber múltiplos parâmetros, "print" não</label>
                <input type="radio" name="questionPHP5" id="PHP5B" />
            </div>
            <div>
                <label htmlFor="PHP5C">"Print" pode receber múltiplos parâmetros, "echo" não</label>
                <input type="radio" name="questionPHP5" id="PHP5C" />
            </div>
            <div>
                <label htmlFor="PHP5D">Não há diferença</label>
                <input type="radio" name="questionPHP5" id="PHP5D" />
            </div>
            <input onClick={EnviarResPHP5} className="BtnEnvioPHP5" type="button" value="ENVIAR" />
            <p className="RespotaPHP5">{respostaPHP5}</p>
            <input onClick={ProximaQPHP5} className="BtnNextPHP5" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default ThursdayQPHP