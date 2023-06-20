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
export const getAllData = async () => {
    const characters = await getSpecifiedData(`${SWAPI_ROOT}${PEOPLE_CATEGORY}`)
    const vehicles = await getSpecifiedData(`${SWAPI_ROOT}${VEHICLES_CATEGORY}`)
    const species = await getSpecifiedData(`${SWAPI_ROOT}${SPECIES_CATEGORY}`)
    const planets = await getSpecifiedData(`${SWAPI_ROOT}${PLANETS_CATEGORY}`)
    const starships = await getSpecifiedData(`${SWAPI_ROOT}${STARSHIPS_CATEGORY}`)
    return {
        characters:characters.flat(),
        vehicles:vehicles.flat(),
        species:species.flat(),
        planets:planets.flat(),
        starships:starships.flat()
    }
}

