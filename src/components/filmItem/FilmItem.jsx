import React from 'react';
import {FILM_CATEGORY, IMG_URL} from '../../api/constants';
import './FilmItem.scss';

const FilmItem = ({id, title, director, release, text}) => {
    return (
        <div className='film-item box-shadow'>
            <div className='film-img'>
                <img src={`${IMG_URL}${FILM_CATEGORY}/${id}.jpg`} alt='film'/>
            </div>
            <div className='film-desc'>
                <p>{title}</p>
                <br/>
                <p>Director: {director}</p>
                <br/>
                <p>Release: {release}</p>
                <br/>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default FilmItem;