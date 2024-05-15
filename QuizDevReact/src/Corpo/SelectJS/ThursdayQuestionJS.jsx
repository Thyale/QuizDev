import { useState } from "react"
import EndJS from "./EndJS"

function ThursdayQuestionJS(){

    const [resposta05, setResposta05] = useState("")

    function EnviarResposta5(){
        var BtnEnvio5 = window.document.querySelector("input.BtnEnvio5")
        BtnEnvio5.style.display = "none" 
        var BtnNext5 = window.document.querySelector("input.BtnNext5")
        BtnNext5.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="question5"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'B5') {
            setResposta05("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setResposta05("Opss! Você errou! A resposta certa era a letra B")
        }
    }

    function ProximaQuestao5(){
        let ThursdayQuestionJS= window.document.querySelector("div.ThursdayQuestionJS")
        ThursdayQuestionJS.style.display = "none"
        let EndJS= window.document.querySelector("div.EndJS")
        EndJS.style.display = "block"
    }

    return(
        <div className="ThursdayQuestionJS">
            <p>O que será exibido no console pelo seguinte código?</p>
            <p>let x = 10</p>
            <p>x += 5</p>
            <p>console.log(x)</p>
            <div>
                <label htmlFor="A5">10</label>
                <input type="radio" name="question5" id="A5" />
            </div>
            <div>
                <label htmlFor="B5">15</label>
                <input type="radio" name="question5" id="B5" />
            </div>
            <div>
                <label htmlFor="C5">5</label>
                <input type="radio" name="question5" id="C5" />
            </div>
            <div>
                <label htmlFor="D5">NaN</label>
                <input type="radio" name="question5" id="D5" />
            </div>
            <input onClick={EnviarResposta5} className="BtnEnvio5" type="button" value="ENVIAR" />
            <p className="RespotaQ5">{resposta05}</p>
            <input onClick={ProximaQuestao5} className="BtnNext5" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default ThursdayQuestionJS