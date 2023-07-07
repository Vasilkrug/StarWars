import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {SliderButtons} from '../index';
import {EMPTY_IMG_LINK} from '../../api/constants';
import {getQueryNumber} from '../../api/helpers';
import './Slider.scss';
import 'swiper/css';


const Slider = ({url, title, data}) => {
    const [currentData, setCurrentData] = useState([]);
    const sliderRef = useRef(null)

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
        <div ref={sliderRef} className={`slider ${title.toLowerCase()} box-shadow`}>
            <h2>{title}</h2>
            <div className={'my-slider'}>
                {data.slice(0, 5).map((item, index) => {
                    return (
                        <div key={item} className={'slide'}>
                            <Link to={`/${title.toLowerCase()}/${item}`}
                                  state={{...currentData[index], title: title.toLowerCase(), img: `${url}/${item}.jpg`}}
                            >
                                <h2>{currentData[index]?.name}</h2>
                            </Link>

                            <img onError={(e) => e.target.src = EMPTY_IMG_LINK}
                                 src={`${url}/${item}.jpg`}
                                 alt='slide image'/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Slider;