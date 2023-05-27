import React from 'react';
import {useSwiper} from 'swiper/react';
import {arrowLeft, arrowRight} from '../../assets/icons/icons';
import './SliderButtons.scss';

const SliderButtons = () => {
    const swiper = useSwiper()

    return (
        <div className={'slider-buttons'}>
            <button onClick={() => swiper.slidePrev()}>
                <img src={arrowLeft} alt='arrow'/>
            </button>
            <span>Press and drag</span>
            <button onClick={() => swiper.slideNext()}>
                <img src={arrowRight} alt='arrow'/>
            </button>
        </div>
    );
};

export default SliderButtons;