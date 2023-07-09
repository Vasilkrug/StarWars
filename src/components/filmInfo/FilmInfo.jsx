import React from 'react';
import {InfoList} from '../index';
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
            <InfoList url={`${IMG_URL}${CHARACTERS_CATEGORY}`}
                      title={'characters'}
                      query={'people'}
                      data={getQueryNumbers(film.characters)}/>
            <InfoList url={`${IMG_URL}${PLANETS_CATEGORY}`}
                      title={'planets'}
                      data={getQueryNumbers(film.planets)}/>
            <InfoList url={`${IMG_URL}${SPECIES_CATEGORY}`}
                      title={'species'}
                      data={getQueryNumbers(film.species)}/>
            <InfoList url={`${IMG_URL}${STARSHIPS_CATEGORY}`}
                      title={'starships'}
                      data={getQueryNumbers(film.starships)}/>
            <InfoList url={`${IMG_URL}${VEHICLES_CATEGORY}`}
                      title={'vehicles'}
                      data={getQueryNumbers(film.vehicles)}/>
        </div>
    );
};

export default FilmInfo;