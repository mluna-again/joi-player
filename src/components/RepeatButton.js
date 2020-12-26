import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RepeatButton(props) {
    return <div>
        <FontAwesomeIcon {...props} icon={faRedoAlt}/>
    </div>
}

export default RepeatButton