import { useState } from "react"
import ThursdayQPHP from "./ThursdayQPHP"

function FourthQPHP(){

    const [respostaPHP4, setRespostaPHP4] = useState("")

    function EnviarResPHP4(){
        let BtnEnvioPHP4 = window.document.querySelector("input.BtnEnvioPHP4")
        BtnEnvioPHP4.style.display = "none"
        let BtnNextPHP4 = window.document.querySelector("input.BtnNextPHP4")
        BtnNextPHP4.style.display = "block"

        var selectedAnswer = document.querySelector('input[name="questionPHP4"]:checked');
        if (selectedAnswer && selectedAnswer.id === 'PHP4D') {
            setRespostaPHP4("Isso mesmo!! Você acertou a resposta!!")
        }else{
            setRespostaPHP4("Opss! Você errou! A resposta certa era a letra D")
        }
    }

    function ProximaQPHP4(){
        let FourthQPHP = window.document.querySelector("div.FourthQPHP")
        FourthQPHP.style.display = "none"
        let ThursdayQPHP = window.document.querySelector("div.ThursdayQPHP")
        ThursdayQPHP.style.display = "block"

        let BtnEnvioPHP4 = window.document.querySelector("input.BtnEnvioPHP4")
        BtnEnvioPHP4.style.display = "block"
        let BtnNextPHP4 = window.document.querySelector("input.BtnNextPHP4")
        BtnNextPHP4.style.display = "none"
        setRespostaPHP4("")
    }

    return(
        <div className="FourthQPHP">
            <p>Qual é a função usada para conectar a um banco de dados MySQL em PHP?</p>
            <div>
                <label htmlFor="PHP4A">mysql_connect()</label>
                <input type="radio" name="questionPHP4" id="PHPPHP4A" />
            </div>
            <div>
                <label htmlFor="PHP4B">connect_mysql()</label>
                <input type="radio" name="questionPHP4" id="PHP4B" />
            </div>
            <div>
                <label htmlFor="PHP4C">db_connect()</label>
                <input type="radio" name="questionPHP4" id="PHP4C" />
            </div>
            <div>
                <label htmlFor="PHP4D">mysqli_connect()</label>
                <input type="radio" name="questionPHP4" id="PHP4D" />
            </div>
            <input onClick={EnviarResPHP4} className="BtnEnvioPHP4" type="button" value="ENVIAR" />
            <p className="RespotaPHP4">{respostaPHP4}</p>
            <input onClick={ProximaQPHP4} className="BtnNextPHP4" type="button" value="PRÓXIMA QUESTÃO" />
        </div>
    )
}

export default FourthQPHP