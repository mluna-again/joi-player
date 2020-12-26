import RepeatButton from "./RepeatButton";
import RandomButton from "./RandomButton";

function AdditionalPlayerController() {
    return <div className="additional-controller">
        <RandomButton className="icon"/>
        <RepeatButton className="icon"/>
    </div>
}

export default AdditionalPlayerController