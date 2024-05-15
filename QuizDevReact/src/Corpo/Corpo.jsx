import CorpoStart from "./CorpoStart"
import CorpoLinguagem from "./CorpoLinguagem"

import StartJS from "./SelectJS/StartJS"
import SelectPY from "./SelectPY/SelectPY"
import SelectPHP from "./SelectPHP/SelectPHP"

import FirstQuestionJS from "./SelectJS/FirstQuestionJS"
import SecondQuestionJS from "./SelectJS/SecondQuestionJS"

function Corpo(){
    return(
        <div className="CorpoContainer">
            <CorpoStart/>
            <CorpoLinguagem/>

            <StartJS/>
            <FirstQuestionJS/>
            <SecondQuestionJS/>

            <SelectPY/>
            <SelectPHP/>
        </div>
    )
}

export default Corpo