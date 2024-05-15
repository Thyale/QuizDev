import { useState } from "react"
import FourthQuestionJS from "./FourthQuestionJS"

function ThirdQuestionJS(){

    const [resposta03, setResposta03] = useState("")

    function EnviarResposta3(){
        var BtnEnvio3 = window.document.querySelector("input.BtnEnvio3")
        BtnEnvio3.style.display = "none" 
        var BtnNext3 = window.document.querySelector("input.BtnNext3")
        BtnNext3.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="question3"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'TA') {
            setResposta03("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setResposta03("Opss! Você errou! A resposta certa era a letra A")
        }
    }

    function ProximaQuestao3(){
        let ThirdQuestionJS = window.document.querySelector("div.ThirdQuestionJS")
        ThirdQuestionJS.style.display = "none"
        let FourthQuestionJS = window.document.querySelector("div.FourthQuestionJS")
        FourthQuestionJS.style.display = "block"
    }

    return(
        <div className="ThirdQuestionJS">
            <p>Qual é a saída do seguinte código JavaScript? "console.log(typeof null)"</p>
            <div>
                <label htmlFor="TA">"object"</label>
                <input type="radio" name="question3" id="TA" />
            </div>
            <div>
                <label htmlFor="TB">"null"</label>
                <input type="radio" name="question3" id="TB" />
            </div>
            <div>
                <label htmlFor="TC">"undefined"</label>
                <input type="radio" name="question3" id="TC" />
            </div>
            <div>
                <label htmlFor="TD">"number"</label>
                <input type="radio" name="question3" id="TD" />
            </div>
            <input onClick={EnviarResposta3} className="BtnEnvio3" type="button" value="ENVIAR" />
            <p className="RespotaQ2">{resposta03}</p>
            <input onClick={ProximaQuestao3} className="BtnNext3" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default ThirdQuestionJS
