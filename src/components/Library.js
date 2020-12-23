import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongInLibrary from "./SongInLibrary";

function Library(props) {
    const {songs, setSongHandler, currentSong, isLibraryDisplayed, setIsLibraryDisplayed} = props

    return <div className={`library ${isLibraryDisplayed ? 'show' : ''}`}>
        <div className="menu-container">
            <FontAwesomeIcon size="2x" icon={faBars} className="menu"
                             onClick={() => setIsLibraryDisplayed(!isLibraryDisplayed)}/>
        </div>
        <h1 className="title">Joi</h1>
        <ul className="list">
            {
                songs.map(song => <SongInLibrary key={song.uuid} isPlaying={currentSong === song}
                                                 setSongHandler={() => setSongHandler(song)}
                                                 title={song.name} artist={song.artist}
                                                 cover={song.cover}/>)
            }
        </ul>
    </div>
}

export default Library