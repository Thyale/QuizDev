import { useState } from "react";
import SecondQuestionJS from "./SecondQuestionJS";

function FirstQuestionJS(){

    function NEXTQUESTION(){
        let FirstQuestionJS = window.document.querySelector("div.FirstQuestionJS")
        FirstQuestionJS.style.display = "none"
        let SecondQuestionJS = window.document.querySelector("div.SecondQuestionJS")
        SecondQuestionJS.style.display = "block"
    }

    function ShowRQ1(){
        var BtnNext = window.document.querySelector("input.BtnNext")
        var selectedAnswer = document.querySelector('input[name="question"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'D') {
            alert ("vc acertou!")
            BtnNext.style.display = "block"
        }else{
            alert ("vc errou!")
            BtnNext.style.display = "block"
        }
    }


    return(
        <div className="FirstQuestionJS">
            <p>Qual das seguintes opções é a maneira correta de declarar uma variável em JavaScript?</p>
            <div>
                <label htmlFor="A">Var myVariable;</label>
                <input type="radio" name="question" id="A" />
            </div>
            <div>
                <label htmlFor="B">Let myVariable;</label>
                <input type="radio" name="question" id="B" />
            </div>
            <div>
                <label htmlFor="C">Const myVariable;</label>
                <input type="radio" name="question" id="C" />
            </div>
            <div>
                <label htmlFor="D">Todas as alternativas acima estão corretas.</label>
                <input type="radio" name="question" id="D" />
            </div>
            <input onClick={ShowRQ1} className="BtnEnvio" type="button" value="ENVIAR" />
            <p className="RespotaQ1"></p>
            <input onClick={NEXTQUESTION} className="BtnNext" type="button" value="NEXT QUESTION" />
        </div>
    )
}

export default FirstQuestionJS