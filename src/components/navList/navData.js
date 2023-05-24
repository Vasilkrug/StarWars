import { v4 as uuidv4 } from 'uuid'
import {characters, films, planets, species, starships, vehicles} from "../../assets/icons/icons";

export const navData = [
    {'id': uuidv4(), img: films, 'title': 'Films'},
    {'id': uuidv4(), img: characters, 'title': 'Characters'},
    {'id': uuidv4(), img: species, 'title': 'Species'},
    {'id': uuidv4(), img: planets, 'title': 'Planets'},
    {'id': uuidv4(), img: starships, 'title': 'Starships'},
    {'id': uuidv4(), img: vehicles, 'title': 'Vehicles'},
]