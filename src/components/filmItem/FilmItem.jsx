import React from 'react';
import './FilmItem.scss';

const FilmItem = ({id, title, director, release, text}) => {
    return (
        <div className="film-item">
            <div className="film-img">
                <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt=""/>
            </div>
            <div className="film-desc">
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