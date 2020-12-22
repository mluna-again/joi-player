import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function SongInLibrary(props) {
    const {title, artist, cover, setSongHandler} = props
    return <div className="song-in-library">
        <div className="song-container">
            <img className="cover" alt="cover" src={cover}/>
            <div className="info-container">
                <h3 className="title">{breakText(title)}</h3>
                <p className="artist">{artist}</p>
            </div>
        </div>
        <FontAwesomeIcon icon={faPlay} className="play-icon" onClick={setSongHandler}/>
    </div>
}

export default SongInLibrary

function breakText(text) {
    const length = 15
    const textBroke = text.slice(0, length)
    return `${textBroke}${textBroke.length >= length ? '...' : ''}`
}