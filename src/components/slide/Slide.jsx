import React from 'react';
import './Slide.scss';
import {Link} from "react-router-dom";

const Slide = ({index,title,year}) => {
    const release = new Date(year);
    return (
        <>
            <div className="slide-img">
                <img src={`https://starwars-visualguide.com/assets/img/films/${index}.jpg`} alt=""/>
            </div>
            <div className="slide-desc">
                <Link to={`/films/${index}`}>
                    <h2>{title}</h2>
                </Link>
                <img src={require('../../assets/images/ball.png')} alt="ball"/>
                <span>Release in {release.getFullYear()}</span>
            </div>
        </>
    );
};

export default Slide;