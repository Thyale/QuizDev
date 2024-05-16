import { useState } from "react"
import SecondQPY from "./SecondQPY"

function FirstQPY(){

    const [respostaPY1, setRespostaPY1] = useState("")

    function EnviarResPY1(){
        let BtnEnvioPY1 = window.document.querySelector("input.BtnEnvioPY1")
        BtnEnvioPY1.style.display = "none"
        let BtnNextPY1 = window.document.querySelector("input.BtnNextPY1")
        BtnNextPY1.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPY1"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PY1C') {
            setRespostaPY1("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPY1("Opss! Você errou! A resposta certa era a letra C")
        }
    }

    function ProximaQPY1(){
        let FirstQPY = window.document.querySelector("div.FirstQPY")
        FirstQPY.style.display = "none"
        let SecondQPY = window.document.querySelector("div.SecondQPY")
        SecondQPY.style.display = "block"
    }

    return(
        <div className="FirstQPY">
            <p>Qual é a função principal da palavra-chave `def` em Python?</p>
            <div>
                <label htmlFor="PY1A">Definir uma classe</label>
                <input type="radio" name="questionPY1" id="PY1A" />
            </div>
            <div>
                <label htmlFor="PY1B">Declarar uma variável</label>
                <input type="radio" name="questionPY1" id="PY1B" />
            </div>
            <div>
                <label htmlFor="PY1C">Definir uma função</label>
                <input type="radio" name="questionPY1" id="PY1C" />
            </div>
            <div>
                <label htmlFor="PY1D">Importar um módulo</label>
                <input type="radio" name="questionPY1" id="PY1D" />
            </div>
            <input onClick={EnviarResPY1} className="BtnEnvioPY1" type="button" value="ENVIAR" />
            <p className="RespotaPY1">{respostaPY1}</p>
            <input onClick={ProximaQPY1} className="BtnNextPY1" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default FirstQPY