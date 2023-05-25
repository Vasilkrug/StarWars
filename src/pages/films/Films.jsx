import React, {useEffect} from 'react';
import './Films.scss';
import {getApiData} from "../../api/api";
import {useDispatch} from "react-redux";
import {getFilms} from "../../store/actions/filmsActions";
import Slider from "../../components/slider/Slider";


const Films = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getApiData('https://swapi.dev/api/films/')
            .then(data => dispatch(getFilms(data.results)))
    }, [])
    return (
        <div className={'page films-page'}>
            <Slider/>
        </div>
    );
};

export default Films;