function CorpoLinguagem(){
    return(
        <div className="CorpoLinguagem">
            <h1>Escolha uma <strong>LINGUAGEM</strong></h1>
            <lord-icon src="https://cdn.lordicon.com/rmkahxvq.json" trigger="loop" delay="1000" colors="primary:#ffffff" >
            </lord-icon>
            <div className="CorpoLinguagem_Opcoes">
               <input type="button" value="JAVASCRIPT" />
               <input type="button" value="PYTHON" />
               <input type="button" value="PHP" />
            </div>
        </div>
    )
}

export default CorpoLinguagem