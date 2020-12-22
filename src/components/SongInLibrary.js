import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function SongInLibrary(props) {
    const {title, artist, cover} = props
    return <div className="song-in-library">
        <div className="song-container">
            <img className="cover" alt="cover" src={cover}/>
            <div>
                <h3 className="title">{title}</h3>
                <p className="artist">{artist}</p>
            </div>
        </div>
        <FontAwesomeIcon icon={faPlay} className="play-icon"/>
    </div>
}

export default SongInLibrary