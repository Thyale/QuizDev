import React from "react";
import StartJS from "./SelectJS/StartJS";
import SelectPY from "./SelectPY/SelectPY";
import SelectPHP from "./SelectPHP/SelectPHP";

function CorpoLinguagem() {
    
    function JAVASCRIPT() {
        let CorpoLinguagem = window.document.querySelector("div.CorpoLinguagem");
        CorpoLinguagem.style.display = "none";

        let StartJS = window.document.querySelector("div.StartJS");
        StartJS.style.display = "flex";
    }

    function PYTHON() {
        let CorpoLinguagem = window.document.querySelector("div.CorpoLinguagem");
        CorpoLinguagem.style.display = "none";

        let SelectPY = window.document.querySelector("div.SelectPY");
        SelectPY.style.display = "flex";
    }

    function PHP() {
        let CorpoLinguagem = window.document.querySelector("div.CorpoLinguagem");
        CorpoLinguagem.style.display = "none";

        let SelectPHP = window.document.querySelector("div.SelectPHP");
        SelectPHP.style.display = "flex";
    }

    return (
        <div className="CorpoLinguagem">
            <h1>Escolha uma <strong>LINGUAGEM</strong></h1>
            <lord-icon src="https://cdn.lordicon.com/rmkahxvq.json" trigger="loop" delay="1000" colors="primary:#ffffff"></lord-icon>
            <div className="CorpoLinguagem_Opcoes">
                <input onClick={JAVASCRIPT} type="button" value="JAVASCRIPT" />
                <input onClick={PYTHON} type="button" value="PYTHON" />
                <input onClick={PHP} type="button" value="PHP" />
            </div>
        </div>
    );
}

export default CorpoLinguagem;
