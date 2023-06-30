import React from 'react';
import {useSelector} from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FilmSlide, Loader, SliderButtons} from '../index'
import './FilmSlider.scss';
import 'swiper/css';


const FilmSlider = () => {
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
                                    <FilmSlide index={index + 1}
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

export default FilmSlider;