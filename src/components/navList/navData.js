import { v4 as uuidv4 } from 'uuid'
import {characters, films, planets, species, starships, vehicles} from "../../assets/icons/icons";

export const navData = [
    {'id': uuidv4(), img: films, 'title': 'Films','route':'/films'},
    {'id': uuidv4(), img: characters, 'title': 'Characters','route':'/characters'},
    {'id': uuidv4(), img: species, 'title': 'Species','route':'/species'},
    {'id': uuidv4(), img: planets, 'title': 'Planets','route':'/planets'},
    {'id': uuidv4(), img: starships, 'title': 'Starships','route':'/starships'},
    {'id': uuidv4(), img: vehicles, 'title': 'Vehicles','route':'/vehicles'},
]