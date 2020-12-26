import { useRef, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import AdditionalPlayerController from "./AdditionalPlayerController";

function Player(props) {
    const {song, next: nextSongHandler, prev: prevSongHandler} = props
    const audio = useRef(null)

    const {isPlaying, setIsPlaying} = props
    const [songInfo, setSongInfo] = useState({
        startTime: null,
        endTime: null
    })
    const {startTime, endTime} = songInfo

    const playHandler = async () => {
        if (isPlaying) audio.current.pause()
        else await audio.current.play()
        setIsPlaying(!isPlaying)
    }

    const [percentage, setPercentage] = useState(0)
    const updateTimeHandler = (event) => {
        const duration = event.target.duration, currentTime = event.target.currentTime
        setSongInfo({
            startTime: currentTime,
            endTime: duration - currentTime || 0 // 0 when the song starts
        })
        setPercentage(getPercentage(duration, currentTime))
    }

    const songEndedHandler = () => {
        setIsPlaying(false)
        nextSongHandler()
    }

    const timeChangeHandler = ({target}) => {
        audio.current.currentTime = getTime(audio.current.duration, target.value)
        setPercentage(target.value)
    }

    // autostarts song
    useEffect(() => {
        audio.current.play()
        setIsPlaying(true)
    }, [song, setIsPlaying])

    return <div className="player">
        <div className="time">
            <AdditionalPlayerController/>
            <div className="timeline">
                <p className="start">{convertToTime(startTime)}</p>
                <div className="track-container">
                    <div className="thumb"/>
                    <div className="thumb-progress"
                        // the 99 instead of 100 is for a little offset
                         style={{transform: `translateY(-50%) translateX(${-99 + percentage}%)`}}/>
                    <input max="100" type="range" value={percentage || 0}
                           onChange={timeChangeHandler}/>
                </div>
                <p className="end">-{convertToTime(endTime)}</p>
            </div>
        </div>
        <div className="controls">
            <FontAwesomeIcon size="2x" className="previous" icon={faAngleLeft}
                             onClick={prevSongHandler}/>
            <FontAwesomeIcon size="2x" className="play" icon={isPlaying ? faPause : faPlay}
                             onClick={playHandler}/>
            <FontAwesomeIcon size="2x" className="next" icon={faAngleRight}
                             onClick={nextSongHandler}/>
        </div>
        <audio src={song} ref={audio} onTimeUpdate={updateTimeHandler} onEnded={songEndedHandler}
               onLoadedData={updateTimeHandler}/>
    </div>
}

export default Player

function convertToTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds - (minutes * 60))
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}` || '00:00'
}

function getPercentage(duration, currentTime) {
    const percentagePerSecond = 100 / duration
    return Math.floor(percentagePerSecond * currentTime)
}

function getTime(duration, percentage) {
    return Math.floor((percentage * duration) / 100)
}

