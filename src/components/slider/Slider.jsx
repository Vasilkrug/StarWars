import React, {useEffect} from 'react';
import './Slider.scss';
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import SliderButtons from "../sliderButtons/SliderButtons";
import {EMPTY_IMG_LINK} from "../../api/constants";

const Slider = ({url, title, data}) => {


    useEffect(() => {

    })

    return (
        <div className={'slider'}>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={3}
                className={'my-slider'}
                spaceBetween={15}
            >
                {data.map(item => {
                    return (
                        <SwiperSlide className={'slider-slide'}>
                            <h2>{title}</h2>
                            <img onError={(e) => e.target.src = EMPTY_IMG_LINK} src={`${url}/${item}.jpg`} alt=""/>
                        </SwiperSlide>
                    )
                })}
                {data.length <= 3 ? null : <SliderButtons/>}
            </Swiper>
        </div>
    );
};

export default Slider;