import Player from "./Player";

function Song(props) {
    const {name, artist, cover, audio} = props.song.currentSong
    return (
        <div className={`song ${props.isLibraryDisplayed ? 'move-right' : ''}`}>
            <h1 className="title">{name}</h1>
            <img src={cover} alt="cover song" className="picture"/>
            <p className="artist">{artist}</p>
            <Player song={audio} next={props.song.nextSongHandler}
                    prev={props.song.prevSongHandler}/>
        </div>
    );
}

export default Song;
