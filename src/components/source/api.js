// import axios from 'axios'
import json from './cardsTvoe.json'
import jsonManKurtki from './cardsKurtki.json'
import jsonManShoes from './cardsShoes.json'
import jsonManSportWear from './cardsSport.json'
import jsonManHomeWear from './cardsHome.json'


const objJson = {
    json : json,
    jsonManKurtki : jsonManKurtki,
    jsonManShoes : jsonManShoes,
    jsonManSportWear : jsonManSportWear,
    jsonManHomeWear : jsonManHomeWear,
}

// function getData() {
//     console.log(json)
//     // axios.get('./cardsTvoe.json').then(data => console.log(data))
// }


// export default getData

export  {objJson}

