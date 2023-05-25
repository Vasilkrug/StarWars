import React from 'react';
import './Slider.scss';
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import Slide from "../slide/Slide";
import Loader from "../loader/Loader";
import SliderButtons from "../sliderButtons/SliderButtons";

const Slider = () => {
    const films = useSelector(state => state.films.films)

    return (
        <>
            {!films.length ? <Loader/> :
                <div className={'slider-container'}>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={2}
                        className={'films-slider'}
                    >
                        {films.map((film, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Slide index={index + 1}
                                           title={film.title}
                                           year={film['release_date']}/>
                                </SwiperSlide>
                            )
                        })}

                        <SliderButtons/>
                    </Swiper>
                </div>
            }
        </>
    );
};

export default Slider;