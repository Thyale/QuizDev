import { useState } from "react"
import FourthQPHP from "./FourthQPHP"

function ThirdQPHP(){

    const [respostaPHP3, setRespostaPHP3] = useState("")

    function EnviarResPHP3(){
        let BtnEnvioPHP3 = window.document.querySelector("input.BtnEnvioPHP3")
        BtnEnvioPHP3.style.display = "none"
        let BtnNextPHP3 = window.document.querySelector("input.BtnNextPHP3")
        BtnNextPHP3.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPHP3"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PHP3C') {
            setRespostaPHP3("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPHP3("Opss! Você errou! A resposta certa era a letra C")
        }
    }

    function ProximaQPHP3(){
        let ThirdQPHP = window.document.querySelector("div.ThirdQPHP")
        ThirdQPHP.style.display = "none"
        let FourthQPHP = window.document.querySelector("div.FourthQPHP")
        FourthQPHP.style.display = "block"

        let BtnEnvioPHP3 = window.document.querySelector("input.BtnEnvioPHP3")
        BtnEnvioPHP3.style.display = "block"
        let BtnNextPHP3 = window.document.querySelector("input.BtnNextPHP3")
        BtnNextPHP3.style.display = "none"
        setRespostaPHP3("")
    }

    return(
        <div className="ThirdQPHP">
            <p>Qual é a saída do seguinte código PHP?</p>
            <p>echo strlen("Hello World!");</p>
            <div>
                <label htmlFor="PHP3A">10</label>
                <input type="radio" name="questionPHP3" id="PHPPHP3A" />
            </div>
            <div>
                <label htmlFor="PHP3B">11</label>
                <input type="radio" name="questionPHP3" id="PHP3B" />
            </div>
            <div>
                <label htmlFor="PHP3C">12</label>
                <input type="radio" name="questionPHP3" id="PHP3C" />
            </div>
            <div>
                <label htmlFor="PHP3D">13</label>
                <input type="radio" name="questionPHP3" id="PHP3D" />
            </div>
            <input onClick={EnviarResPHP3} className="BtnEnvioPHP3" type="button" value="ENVIAR" />
            <p className="RespotaPHP3">{respostaPHP3}</p>
            <input onClick={ProximaQPHP3} className="BtnNextPHP3" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default ThirdQPHP