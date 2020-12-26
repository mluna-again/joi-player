import { useState } from "react"
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RepeatButton() {
    /*
    * 0 -> no repeat
    * 1 -> repeat songs
    * 2 -> repeat current song
    * */
    const [mode, setMode] = useState(2)
    const nextMode = () => {
        if (mode === 2) setMode(0)
        else setMode(mode + 1)
    }
    return <div className="repeat" onClick={nextMode}>
        <span className="indicator">{mode === 2 ? '1' : ''}</span>
        <FontAwesomeIcon className={`icon ${mode !== 0 ? 'icon-active' : ''}`}
                         icon={faRedoAlt} onClick={nextMode}/>
    </div>
}

export default RepeatButton