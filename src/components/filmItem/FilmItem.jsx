import React from 'react';
import './FilmItem.scss';
import {FILM_CATEGORY, IMG_URL} from "../../api/constants";

const FilmItem = ({id, title, director, release, text}) => {
    return (
        <div className='film-item'>
            <div className='film-img'>
                <img src={`${IMG_URL}${FILM_CATEGORY}/${id}.jpg`} alt="film"/>
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