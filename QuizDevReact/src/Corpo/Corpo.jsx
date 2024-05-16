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
import FirstQPY from "./SelectPY/FirstQPY"
import SecondQPY from "./SelectPY/SecondQPY"
import ThirdQPY from "./SelectPY/ThirdQPY"
import FourthQPY from "./SelectPY/FourthQPY"
import ThursdayQPY from "./SelectPY/ThursdayQPY"
import EndPY from "./SelectPY/EndPY"


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
            <FirstQPY/>
            <SecondQPY/>
            <ThirdQPY/>
            <FourthQPY/>
            <ThursdayQPY/>
            <EndPY/>

            <SelectPHP/>
        </div>
    )
}

export default Corpo