import React from 'react';
import {Link} from 'react-router-dom';
import {FILM_CATEGORY, IMG_URL} from '../../api/constants';
import {ball} from '../../assets/images/images';
import './FilmSlide.scss';


const FilmSlide = ({index, title, year}) => {
    const release = new Date(year);
    return (
        <div className={'my-swiper-slide'}>
            <div className='slide-img'>
                <img src={`${IMG_URL}${FILM_CATEGORY}/${index}.jpg`}
                     alt='film'/>
            </div>
            <div className='slide-desc'>
                <Link to={`/films/${index}`} state={{'name': title}}>
                    <h2>{title}</h2>
                </Link>
                <img src={ball} alt='ball'/>
                <span>Release in {release.getFullYear()}</span>
            </div>
        </div>
    );
};

export default FilmSlide;