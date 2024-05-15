import { useState } from "react"
import ThursdayQuestionJS from "./ThursdayQuestionJS"

function FourthQuestionJS(){

    const [resposta04, setResposta04] = useState("")

    function EnviarResposta4(){
        var BtnEnvio4 = window.document.querySelector("input.BtnEnvio4")
        BtnEnvio4.style.display = "none" 
        var BtnNext4 = window.document.querySelector("input.BtnNext4")
        BtnNext4.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="question4"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'QC') {
            setResposta04("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setResposta04("Opss! Você errou! A resposta certa era a letra C")
        }
    }

    function ProximaQuestao4(){
        let FourthQuestionJS = window.document.querySelector("div.FourthQuestionJS")
        FourthQuestionJS.style.display = "none"
        let ThursdayQuestionJS= window.document.querySelector("div.ThursdayQuestionJS")
        ThursdayQuestionJS.style.display = "block"
    }

    return(
        <div className="FourthQuestionJS">
            <p>Qual das seguintes estruturas de controle permite executar um bloco de código várias vezes enquanto uma condição específica for verdadeira?</p>
            <div>
                <label htmlFor="QA">If</label>
                <input type="radio" name="question4" id="QA" />
            </div>
            <div>
                <label htmlFor="QB">For</label>
                <input type="radio" name="question4" id="QB" />
            </div>
            <div>
                <label htmlFor="QC">While</label>
                <input type="radio" name="question4" id="QC" />
            </div>
            <div>
                <label htmlFor="QD">Switch</label>
                <input type="radio" name="question4" id="QD" />
            </div>
            <input onClick={EnviarResposta4} className="BtnEnvio4" type="button" value="ENVIAR" />
            <p className="RespotaQ2">{resposta04}</p>
            <input onClick={ProximaQuestao4} className="BtnNext4" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default FourthQuestionJS
