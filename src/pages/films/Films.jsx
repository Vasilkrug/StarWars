import React, {useEffect} from 'react';
import {getApiData} from '../../api/api';
import {useDispatch} from 'react-redux';
import {getFilms} from '../../store/actions/filmsActions';
import {FilmSlider} from '../../components/index';
import {FILM_CATEGORY, SWAPI_ROOT} from '../../api/constants';
import './Films.scss';


const Films = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getApiData(`${SWAPI_ROOT}${FILM_CATEGORY}`)
            .then(data => dispatch(getFilms(data.results)))
    }, [])
    return (
        <div className={'films-page'}>
            <FilmSlider/>
        </div>
    );
};

export default Films;