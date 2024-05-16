import { useState } from "react"
import ThirdQPY from "./ThirdQPY"

function SecondQPY(){

    const [respostaPY2, setRespostaPY2] = useState("")

    function EnviarResPY2(){
        let BtnEnvioPY2 = window.document.querySelector("input.BtnEnvioPY2")
        BtnEnvioPY2.style.display = "none"
        let BtnNextPY2 = window.document.querySelector("input.BtnNextPY2")
        BtnNextPY2.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPY2"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PY2C') {
            setRespostaPY2("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPY2("Opss! Você errou! A resposta certa era a letra C")
        }
    }

    function ProximaQPY2(){
        let SecondQPY = window.document.querySelector("div.SecondQPY")
        SecondQPY.style.display = "none"
        let ThirdQPY = window.document.querySelector("div.ThirdQPY")
        ThirdQPY.style.display = "block"
    }

    return(
        <div className="SecondQPY">
            <p>Qual é a saída do seguinte código Python?</p>
            <p>print(2 ** 3)</p>
            <div>
                <label htmlFor="PY2A">5</label>
                <input type="radio" name="questionPY2" id="PY2A" />
            </div>
            <div>
                <label htmlFor="PY2B">6</label>
                <input type="radio" name="questionPY2" id="PY2B" />
            </div>
            <div>
                <label htmlFor="PY2C">8</label>
                <input type="radio" name="questionPY2" id="PY2C" />
            </div>
            <div>
                <label htmlFor="PY2D">9</label>
                <input type="radio" name="questionPY2" id="PY2D" />
            </div>
            <input onClick={EnviarResPY2} className="BtnEnvioPY2" type="button" value="ENVIAR" />
            <p className="RespotaPY2">{respostaPY2}</p>
            <input onClick={ProximaQPY2} className="BtnNextPY2" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default SecondQPY