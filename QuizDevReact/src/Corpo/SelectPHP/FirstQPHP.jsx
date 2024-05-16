import { useState } from "react"
import SecondQPHP from "./SecondQPHP"

function FirstQPHP(){

    const [respostaPHP1, setRespostaPHP1] = useState("")

    function EnviarResPHP1(){
        let BtnEnvioPHP1 = window.document.querySelector("input.BtnEnvioPHP1")
        BtnEnvioPHP1.style.display = "none"
        let BtnNextPHP1 = window.document.querySelector("input.BtnNextPHP1")
        BtnNextPHP1.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPHP1"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PHP1D') {
            setRespostaPHP1("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPHP1("Opss! Você errou! A resposta certa era a letra D")
        }
    }

    function ProximaQPHP1(){
        let FirstQPHP = window.document.querySelector("div.FirstQPHP")
        FirstQPHP.style.display = "none"
        let SecondQPHP = window.document.querySelector("div.SecondQPHP")
        SecondQPHP.style.display = "block"

        let BtnEnvioPHP1 = window.document.querySelector("input.BtnEnvioPHP1")
        BtnEnvioPHP1.style.display = "block"
        let BtnNextPHP1 = window.document.querySelector("input.BtnNextPHP1")
        BtnNextPHP1.style.display = "none"
        setRespostaPHP1("")
    }

    return(
        <div className="FirstQPHP">
            <p>Como se declara uma variável em PHP?</p>
            <div>
                <label htmlFor="PHP1A">Var $nome</label>
                <input type="radio" name="questionPHP1" id="PHPPHP1A" />
            </div>
            <div>
                <label htmlFor="PHP1B">$nome</label>
                <input type="radio" name="questionPHP1" id="PHP1B" />
            </div>
            <div>
                <label htmlFor="PHP1C">Nome = $valor</label>
                <input type="radio" name="questionPHP1" id="PHP1C" />
            </div>
            <div>
                <label htmlFor="PHP1D">$nome = $valor</label>
                <input type="radio" name="questionPHP1" id="PHP1D" />
            </div>
            <input onClick={EnviarResPHP1} className="BtnEnvioPHP1" type="button" value="ENVIAR" />
            <p className="RespotaPHP1">{respostaPHP1}</p>
            <input onClick={ProximaQPHP1} className="BtnNextPHP1" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default FirstQPHP