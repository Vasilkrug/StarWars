import React from 'react';
import './SliderButtons.scss';
import {useSwiper} from "swiper/react";
import {arrowLeft, arrowRight} from "../../assets/icons/icons";

const SliderButtons = () => {
    const swiper = useSwiper()

    return (
        <div className={'slider-buttons'}>
            <button onClick={() => swiper.slidePrev()}>
                <img src={arrowLeft} alt=""/>
            </button>
            <span>Press and drag</span>
            <button onClick={() => swiper.slideNext()}>
                <img src={arrowRight} alt=""/>
            </button>
        </div>
    );
};

export default SliderButtons;