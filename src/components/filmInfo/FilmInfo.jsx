import React from 'react';
import {Slider} from '../index';
import {
    CHARACTERS_CATEGORY,
    IMG_URL,
    PLANETS_CATEGORY,
    SPECIES_CATEGORY,
    STARSHIPS_CATEGORY, VEHICLES_CATEGORY
} from '../../api/constants';
import {getQueryNumbers} from '../../api/helpers';
import './FilmInfo.scss';

const FilmInfo = ({film}) => {
    return (
        <div id={'film-info'} className='film-info'>
            <Slider url={`${IMG_URL}${CHARACTERS_CATEGORY}`} title={'Characters'}
                    data={getQueryNumbers(film.characters)}/>
            <Slider url={`${IMG_URL}${PLANETS_CATEGORY}`} title={'Planets'}
                    data={getQueryNumbers(film.planets)}/>
            <Slider url={`${IMG_URL}${SPECIES_CATEGORY}`} title={'Species'}
                    data={getQueryNumbers(film.species)}/>
            <Slider url={`${IMG_URL}${STARSHIPS_CATEGORY}`} title={'Starships'}
                    data={getQueryNumbers(film.starships)}/>
            <Slider url={`${IMG_URL}${VEHICLES_CATEGORY}`} title={'Vehicles'}
                    data={getQueryNumbers(film.vehicles)}/>
        </div>
    );
};

export default FilmInfo;