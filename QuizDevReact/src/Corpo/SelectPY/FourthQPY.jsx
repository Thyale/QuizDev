import { useState } from "react"

function FourthQPY(){

    const [respostaPY4, setRespostaPY4] = useState("")

    function EnviarResPY4(){
        let BtnEnvioPY4 = window.document.querySelector("input.BtnEnvioPY4")
        BtnEnvioPY4.style.display = "none"
        let BtnNextPY4 = window.document.querySelector("input.BtnNextPY4")
        BtnNextPY4.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPY4"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PY4D') {
            setRespostaPY4("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPY4("Opss! Você errou! A resposta certa era a letra D")
        }
    }

    function ProximaQPY4(){
        let FourthQPY = window.document.querySelector("div.FourthQPY")
        FourthQPY.style.display = "none"
        let ThursdayQPY = window.document.querySelector("div.ThursdayQPY")
        ThursdayQPY.style.display = "block"
    }

    return(
        <div className="FourthQPY">
            <p>Qual é a função de "import" em Python?</p>
            <div>
                <label htmlFor="PY4A">Definir uma nova função</label>
                <input type="radio" name="questionPY4" id="PY4A" />
            </div>
            <div>
                <label htmlFor="PY4B">Declarar uma nova variável</label>
                <input type="radio" name="questionPY4" id="PY4B" />
            </div>
            <div>
                <label htmlFor="PY4C">Iniciar um loop</label>
                <input type="radio" name="questionPY4" id="PY4C" />
            </div>
            <div>
                <label htmlFor="PY4D">Importar um módulo ou biblioteca</label>
                <input type="radio" name="questionPY4" id="PY4D" />
            </div>
            <input onClick={EnviarResPY4} className="BtnEnvioPY4" type="button" value="ENVIAR" />
            <p className="RespotaPY4">{respostaPY4}</p>
            <input onClick={ProximaQPY4} className="BtnNextPY4" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default FourthQPY