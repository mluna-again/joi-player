import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RandomButton(props) {
    return <div>
        <FontAwesomeIcon {...props} icon={faRandom}/>
    </div>
}

export default RandomButton
