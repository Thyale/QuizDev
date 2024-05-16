import { useState } from "react"

function ThirdQPY(){

    const [respostaPY3, setRespostaPY3] = useState("")

    function EnviarResPY3(){
        let BtnEnvioPY3 = window.document.querySelector("input.BtnEnvioPY3")
        BtnEnvioPY3.style.display = "none"
        let BtnNextPY3 = window.document.querySelector("input.BtnNextPY3")
        BtnNextPY3.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPY3"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PY3B') {
            setRespostaPY3("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPY3("Opss! Você errou! A resposta certa era a letra B")
        }
    }

    function ProximaQPY3(){
        let ThirdQPY = window.document.querySelector("div.ThirdQPY")
        ThirdQPY.style.display = "none"
        let FourthQPY = window.document.querySelector("div.FourthQPY")
        FourthQPY.style.display = "block"
    }

    return(
        <div className="ThirdQPY">
            <p>O que "len()" faz em Python?</p>
            <div>
                <label htmlFor="PY3A">Retorna o maior valor em uma lista</label>
                <input type="radio" name="questionPY3" id="PY3A" />
            </div>
            <div>
                <label htmlFor="PY3B">Retorna a quantidade de itens em um objeto</label>
                <input type="radio" name="questionPY3" id="PY3B" />
            </div>
            <div>
                <label htmlFor="PY3C">Retorna o menor valor em uma lista</label>
                <input type="radio" name="questionPY3" id="PY3C" />
            </div>
            <div>
                <label htmlFor="PY3D">Retorna uma lista ordenada</label>
                <input type="radio" name="questionPY3" id="PY3D" />
            </div>
            <input onClick={EnviarResPY3} className="BtnEnvioPY3" type="button" value="ENVIAR" />
            <p className="RespotaPY3">{respostaPY3}</p>
            <input onClick={ProximaQPY3} className="BtnNextPY3" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default ThirdQPY