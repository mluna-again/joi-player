import { useState } from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongInLibrary from "./SongInLibrary";

function Library(props) {
    const {songs, setSongHandler} = props
    const [isLibraryDisplayed, setIsLibraryDisplayed] = useState(false)

    return <div className={`library ${isLibraryDisplayed ? 'show' : ''}`}>
        <div className="menu-container">
            <FontAwesomeIcon size="2x" icon={faBars} className="menu"
                             onClick={() => setIsLibraryDisplayed(!isLibraryDisplayed)}/>
        </div>
        <h1 className="title">Tracks</h1>
        <ul className="list">
            {
                songs.map(song => <SongInLibrary onClick={() => setSongHandler(song)}
                                                 title={song.name} artist={song.artist}
                                                 cover={song.cover}/>)
            }
        </ul>
    </div>
}

export default Library