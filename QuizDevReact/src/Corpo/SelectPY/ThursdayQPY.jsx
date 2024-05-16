import { useState } from "react"

function ThursdayQPY(){

    const [respostaPY5, setRespostaPY5] = useState("")

    function EnviarResPY5(){
        let BtnEnvioPY5 = window.document.querySelector("input.BtnEnvioPY5")
        BtnEnvioPY5.style.display = "none"
        let BtnNextPY5 = window.document.querySelector("input.BtnNextPY5")
        BtnNextPY5.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPY5"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PY5A') {
            setRespostaPY5("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPY5("Opss! Você errou! A resposta certa era a letra A")
        }
    }

    function ProximaQPY5(){
        let ThursdayQPY = window.document.querySelector("div.ThursdayQPY")
        ThursdayQPY.style.display = "none"
        let EndPY = window.document.querySelector("div.EndPY")
        EndPY.style.display = "block"
    }

    return(
        <div className="ThursdayQPY">
            <p>Qual é a diferença entre uma lista e uma tupla em Python?</p>
            <div>
                <label htmlFor="PY5A">Listas são mutáveis, tuplas são imutáveis</label>
                <input type="radio" name="questionPY5" id="PY5A" />
            </div>
            <div>
                <label htmlFor="PY5B">Listas são imutáveis, tuplas são mutáveis</label>
                <input type="radio" name="questionPY5" id="PY5B" />
            </div>
            <div>
                <label htmlFor="PY5C">Listas têm elementos do mesmo tipo, tuplas de tipos diferentes</label>
                <input type="radio" name="questionPY5" id="PY5C" />
            </div>
            <div>
                <label htmlFor="PY5D">Tuplas têm elementos do mesmo tipo, listas de tipos diferentes</label>
                <input type="radio" name="questionPY5" id="PY5D" />
            </div>
            <input onClick={EnviarResPY5} className="BtnEnvioPY5" type="button" value="ENVIAR" />
            <p className="RespotaPY5">{respostaPY5}</p>
            <input onClick={ProximaQPY5} className="BtnNextPY5" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default ThursdayQPY