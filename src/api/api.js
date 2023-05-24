import axios from "axios";

export const getApiData = async (url) => {
    try {
        const request = await axios.get(url)
        return await request.data
    } catch (e) {

    }
}
