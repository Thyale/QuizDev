import CorpoStart from "./CorpoStart"
import CorpoLinguagem from "./CorpoLinguagem"

import StartJS from "./SelectJS/StartJS"
import SelectPY from "./SelectPY/SelectPY"
import SelectPHP from "./SelectPHP/SelectPHP"

function Corpo(){
    return(
        <div className="CorpoContainer">
            <CorpoStart/>
            <CorpoLinguagem/>
            <StartJS/>
            <SelectPY/>
            <SelectPHP/>
        </div>
    )
}

export default Corpo