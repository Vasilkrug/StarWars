import {combineReducers, createStore} from "redux";
import {filmsReducer} from "./reducers/FilmsReducer";

const rootReducer = combineReducers({
    films:filmsReducer,
})

export const store = createStore(rootReducer)