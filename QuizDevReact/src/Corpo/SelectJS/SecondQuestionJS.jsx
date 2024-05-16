import { useState } from "react"
import ThirdQuestionJS from "./ThirdQuestionJS"

function SecondQuestionJS(){

    const [resposta02, setResposta02] = useState("")

    function EnviarResposta2(){
        var BtnEnvio2 = window.document.querySelector("input.BtnEnvio2")
        BtnEnvio2.style.display = "none" 
        var BtnNext2 = window.document.querySelector("input.BtnNext2")
        BtnNext2.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="question2"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'SA') {
            setResposta02("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setResposta02("Opss! Você errou! A resposta certa era a letra A")
        }
    }

    function ProximaQuestao(){
        let SecondQuestionJS = window.document.querySelector("div.SecondQuestionJS")
        SecondQuestionJS.style.display = "none"
        let ThirdQuestionJS = window.document.querySelector("div.ThirdQuestionJS")
        ThirdQuestionJS.style.display = "block"

        let BtnEnvio2 = window.document.querySelector("input.BtnEnvio2")
        BtnEnvio2.style.display = "block"
        let BtnNext2 = window.document.querySelector("input.BtnNext2")
        BtnNext2.style.display = "none"
        setResposta02("")
    }

    return(
        <div className="SecondQuestionJS">
            <p>Qual dos métodos a seguir é usado para adicionar um novo elemento ao final de um array em JavaScript?</p>
            <div>
                <label htmlFor="SA">array.push(elemento)</label>
                <input type="radio" name="question2" id="SA" />
            </div>
            <div>
                <label htmlFor="SB">array.add(elemento)</label>
                <input type="radio" name="question2" id="SB" />
            </div>
            <div>
                <label htmlFor="SC">array.append(elemento)</label>
                <input type="radio" name="question2" id="SC" />
            </div>
            <div>
                <label htmlFor="SD">array.insert(elemento)</label>
                <input type="radio" name="question2" id="SD" />
            </div>
            <input onClick={EnviarResposta2} className="BtnEnvio2" type="button" value="ENVIAR" />
            <p className="RespotaQ2">{resposta02}</p>
            <input onClick={ProximaQuestao} className="BtnNext2" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default SecondQuestionJS