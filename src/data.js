import { v4 as uuid } from "uuid/wrapper";

function fetchData() {
    return [
        {
            name: "Sugarless",
            artist: "The Field Tapes",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#485365", "#E7F0E1"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11243"
        },
        {
            name: "Peaches",
            artist: "The Field Tapes",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#485365", "#E7F0E1"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11246"
        },
        {
            name: "Melancholy",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#AE6E6E", "#392935"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11778"
        },
        {
            name: "Longing",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#AE6E6E", "#392935"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11777"
        },
        {
            name: "Going back",
            artist: "Swørn",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#FD5F46", "#335561"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10310"
        },

        {
            name: "Caffeine",
            artist: "Felty",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#485365", "#E7F0E1"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9334"
        },
        {
            name: "Toft",
            artist: "Felty",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#ECCC4D", "#1974B3"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8971"
        },
        {
            name: "Bluetooth Ringtone (interlude)",
            artist: "Aviino",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#B87DBF", "#333254"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10446"
        },
        {
            name: "One Last Call",
            artist: "Nymano",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#60547D", "#1A1615"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10134"
        },
        {
            name: "False Hope",
            artist: "Nymano",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            uuid: uuid(),
            active: true,
            colors: ["#60547D", "#1A1615"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10148"
        }
    ]
}

export default fetchData