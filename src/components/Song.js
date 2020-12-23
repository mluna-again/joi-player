import Player from "./Player";

function Song(props) {
    const {name, artist, cover, audio} = props.song.currentSong
    const {isPlaying, setIsPlaying} = props
    return (
        <div className={`song ${props.isLibraryDisplayed ? 'move-right' : ''}`}>
            <h1 className="title">{name}</h1>
            <img src={cover} alt="cover song" className={`picture ${isPlaying ? 'spin' : ''}`}/>
            <p className="artist">{artist}</p>
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={audio}
                    next={props.song.nextSongHandler}
                    prev={props.song.prevSongHandler}/>
        </div>
    );
}

export default Song;
