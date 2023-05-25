import React from 'react';
import './Slide.scss';

const Slide = ({img,title,year}) => {
    const release = new Date(year);
    return (
        <>
            <div className="slide-img">
                <img src={img} alt=""/>
            </div>
            <div className="slide-desc">
                <h2>{title}</h2>
                <img src={require('../../assets/images/ball.png')} alt="ball"/>
                <span>{release.getFullYear()}</span>
            </div>
        </>
    );
};

export default Slide;