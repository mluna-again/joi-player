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
        }
    ]
}

export default fetchData