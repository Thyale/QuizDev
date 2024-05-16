import { useState } from "react"
import ThirdQPHP from "./ThirdQPHP"

function SecondQPHP(){

    const [respostaPHP2, setRespostaPHP2] = useState("")

    function EnviarResPHP2(){
        let BtnEnvioPHP2 = window.document.querySelector("input.BtnEnvioPHP2")
        BtnEnvioPHP2.style.display = "none"
        let BtnNextPHP2 = window.document.querySelector("input.BtnNextPHP2")
        BtnNextPHP2.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPHP2"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PHP2B') {
            setRespostaPHP2("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPHP2("Opss! Você errou! A resposta certa era a letra B")
        }
    }

    function ProximaQPHP2(){
        let SecondQPHP = window.document.querySelector("div.SecondQPHP")
        SecondQPHP.style.display = "none"
        let ThirdQPHP = window.document.querySelector("div.ThirdQPHP")
        ThirdQPHP.style.display = "block"

        let BtnEnvioPHP2 = window.document.querySelector("input.BtnEnvioPHP2")
        BtnEnvioPHP2.style.display = "block"
        let BtnNextPHP2 = window.document.querySelector("input.BtnNextPHP2")
        BtnNextPHP2.style.display = "none"
        setRespostaPHP2("")
    }

    return(
        <div className="SecondQPHP">
            <p>Qual é a função usada para incluir o conteúdo de um arquivo em PHP?</p>
            <div>
                <label htmlFor="PHP2A">Include_file('arquivo.php')</label>
                <input type="radio" name="questionPHP2" id="PHPPHP2A" />
            </div>
            <div>
                <label htmlFor="PHP2B">Require('arquivo.php')</label>
                <input type="radio" name="questionPHP2" id="PHP2B" />
            </div>
            <div>
                <label htmlFor="PHP2C">Insert('arquivo.php')</label>
                <input type="radio" name="questionPHP2" id="PHP2C" />
            </div>
            <div>
                <label htmlFor="PHP2D">Load('arquivo.php')</label>
                <input type="radio" name="questionPHP2" id="PHP2D" />
            </div>
            <input onClick={EnviarResPHP2} className="BtnEnvioPHP2" type="button" value="ENVIAR" />
            <p className="RespotaPHP2">{respostaPHP2}</p>
            <input onClick={ProximaQPHP2} className="BtnNextPHP2" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default SecondQPHP