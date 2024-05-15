function SecondQuestionJS(){

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
            <input className="BtnEnvio" type="button" value="ENVIAR" />
            <p className="RespotaQ2"></p>
            <input className="BtnNext" type="button" value="NEXT QUESTION" />
        </div>
    )
}

export default SecondQuestionJS