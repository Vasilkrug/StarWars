import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {SliderButtons} from '../index';
import {EMPTY_IMG_LINK} from '../../api/constants';
import {getQueryNumber} from '../../api/helpers';
import './Slider.scss';
import 'swiper/css';

const Slider = ({url, title, data}) => {
    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('data')
        setCurrentData(JSON.parse(data)[`${title.toLowerCase()}`])
    }, [])

    useEffect(() => {
        setCurrentData(prevState => {
            return prevState.filter(item => data.includes(getQueryNumber(item.url)))
        })
    }, [])

    return (
        <div className={'slider'}>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={3}
                className={'my-slider'}
                spaceBetween={15}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={item} className={'slider-slide'}>
                            <h2>{currentData[index]?.name}</h2>
                            <img onError={(e) => e.target.src = EMPTY_IMG_LINK}
                                 src={`${url}/${item}.jpg`}
                                 alt='slide image'/>
                        </SwiperSlide>
                    )
                })}
                {data.length <= 2 ? null : <SliderButtons/>}
            </Swiper>
        </div>
    );
};

export default Slider;