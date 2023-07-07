import axios from "axios";
import {
    CHARACTERS_CATEGORY, PEOPLE_CATEGORY,
    PLANETS_CATEGORY,
    SPECIES_CATEGORY,
    STARSHIPS_CATEGORY,
    SWAPI_ROOT,
    VEHICLES_CATEGORY
} from "./constants";

export const getApiData = async (url) => {
    try {
        const request = await axios.get(url)
        return await request.data
    } catch (e) {
        console.error(e)
    }
}

export const getSpecifiedData = async (url) => {
    try {
        const request = await axios.get(`${url}`)
        const count = await request.data.count
        let res = []
        for (let i = 1; i <= Math.round(count / 10); i++) {
            res.push(axios.get(`${url}/?page=${i}`).then(data => data.data.results))
        }
        return await Promise.all(res)
    } catch (e) {
        console.error(e)
    }
}


