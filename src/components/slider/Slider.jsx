import React from 'react';
import './Slider.scss';
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import Slide from "../slide/Slide";
import {sliderImagesData} from "./sliderImagesData";
import Loader from "../loader/Loader";

const Slider = () => {
    const films = useSelector(state => state.films.films)

    return (
        <div className={'slider-container'}>
            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                className={'films-slider'}
            >

                {!films.length ? <Loader/> :
                    films.map((film, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Slide img={sliderImagesData[index].img}
                                       title={film.title}
                                       year={film['release_date']}/>
                            </SwiperSlide>
                        )
                    })}

                ...
            </Swiper>
        </div>
    );
};

export default Slider;