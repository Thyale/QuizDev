import CorpoStart from "./CorpoStart"
import CorpoLinguagem from "./CorpoLinguagem"

import StartJS from "./SelectJS/StartJS"
import FirstQuestionJS from "./SelectJS/FirstQuestionJS"
import SecondQuestionJS from "./SelectJS/SecondQuestionJS"
import ThirdQuestionJS from "./SelectJS/ThirdQuestionJS"
import FourthQuestionJS from "./SelectJS/FourthQuestionJS"
import ThursdayQuestionJS from "./SelectJS/ThursdayQuestionJS"
import EndJS from "./SelectJS/EndJS"

import SelectPY from "./SelectPY/SelectPY"
import SelectPHP from "./SelectPHP/SelectPHP"

function Corpo(){
    return(
        <div className="CorpoContainer">
            <CorpoStart/>
            <CorpoLinguagem/>

            <StartJS/>
            <FirstQuestionJS/>
            <SecondQuestionJS/>
            <ThirdQuestionJS/>
            <FourthQuestionJS/>
            <ThursdayQuestionJS/>
            <EndJS/>

            <SelectPY/>
            <SelectPHP/>
        </div>
    )
}

export default Corpo