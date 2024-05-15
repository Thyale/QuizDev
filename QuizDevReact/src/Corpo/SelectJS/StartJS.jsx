import React from "react";
import FirstQuestionJS from "./FirstQuestionJS";

function StartJS(){

    function FirstJS(){
        let StartJS = window.document.querySelector("div.StartJS")
        StartJS.style.display = "none"

        let FirstQuestionJS = window.document.querySelector("div.FirstQuestionJS")
        FirstQuestionJS.style.display = "block"
    }

    return(
        <div className="StartJS">
            <h1>O seu quiz de <strong>JAVASCRIPT</strong></h1>
            <p>VAI COMEÇAR</p>
            <input onClick={FirstJS} type="button" value="START" />
        </div>
    )
}

export default StartJS