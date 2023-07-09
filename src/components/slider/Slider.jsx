import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {EMPTY_IMG_LINK, SWAPI_ROOT} from '../../api/constants';
import {getQueryNumber} from '../../api/helpers';
import 'swiper/css';
import {getSpecifiedData} from '../../api/api';
import {Loader} from '../index';
import './Slider.scss';


const Slider = ({url, title, data, query}) => {
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        getSpecifiedData(`${SWAPI_ROOT}${query || title}`)
            .then(data => setCurrentData(data.flat()))
    }, [])

    useEffect(() => {
        setCurrentData(prevState => {
            return prevState.filter(item => data.includes(getQueryNumber(item.url)))
        })
    }, [])

    return (
        <div className={`slider ${title} box-shadow`}>
            {!currentData.length ? <Loader/> :
                <>
                    <h2>{title}</h2>
                    <div className={'my-slider'}>
                        {data.slice(0, 5).map((item, index) => {
                            return (
                                <div key={item} className={'slide'}>
                                    <Link to={`/${title}/${item}`}
                                          state={{
                                              ...currentData[index],
                                              title: title,
                                              img: `${url}/${item}.jpg`
                                          }}
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
                </>}
        </div>
    );
};

export default Slider;