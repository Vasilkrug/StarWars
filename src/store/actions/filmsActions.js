import {GET_FILMS} from "../actionsTypes/filmsActionsTypes";

export const getFilms = (films) => {
    return {type: GET_FILMS, films}
}