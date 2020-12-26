import RepeatButton from "./RepeatButton";
import RandomButton from "./RandomButton";

function AdditionalPlayerController() {
    return <div className="additional-controller">
        <RepeatButton className="icon"/>
        <RandomButton className="icon"/>
    </div>
}

export default AdditionalPlayerController