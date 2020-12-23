import { useState } from "react"
import Song from "./components/Song";
import fetchData from "./data";
import Library from "./components/Library";

function App() {
    const [isLibraryDisplayed, setIsLibraryDisplayed] = useState(false)
    const [data] = useState(fetchData())
    const [currentSong, setCurrentSong] = useState(shuffle(data))
    const [index, setIndex] = useState(0)
    const nextSongHandler = () => {
        if (index >= data.length - 1) {
            setCurrentSong(data[0])
            setIndex(0)
            return
        }
        setCurrentSong(data[index + 1])
        setIndex(index + 1)
    }
    const prevSongHandler = () => {
        if (index <= 0) {
            setIndex(data.length - 1)
            setCurrentSong(data[data.length - 1])
            return
        }
        setCurrentSong(data[index - 1])
        setIndex(index - 1)
    }
    const setSongHandler = (song) => {
        setCurrentSong(song)
        setIndex(data.indexOf(song))
    }


    return <div className="container">
        <Library songs={data} setSongHandler={setSongHandler} currentSong={currentSong}
                 isLibraryDisplayed={isLibraryDisplayed}
                 setIsLibraryDisplayed={setIsLibraryDisplayed}/>
        <Song song={{currentSong, nextSongHandler, prevSongHandler}}
              isLibraryDisplayed={isLibraryDisplayed}/>
    </div>
}

export default App;

function shuffle(songs) {
    return songs[Math.floor(Math.random() * (songs.length))]
}