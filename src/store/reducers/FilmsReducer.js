import {GET_FILMS} from "../actionsTypes/filmsActionsTypes";

const defaultState = {
    films: []
}
export const filmsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {...state,films: action.films}
        default:
            return state
    }
}