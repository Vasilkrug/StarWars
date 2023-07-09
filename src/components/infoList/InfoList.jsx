import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {EMPTY_IMG_LINK, SWAPI_ROOT} from '../../api/constants';
import {getQueryNumber} from '../../api/helpers';
import {getSpecifiedData} from '../../api/api';
import {Loader} from '../index';
import './InfoList.scss';


const InfoList = ({url, title, data, query}) => {
    const [currentData, setCurrentData] = useState({});

    useEffect(() => {
        getSpecifiedData(`${SWAPI_ROOT}${query || title}`)
            .then(data => data.flat().forEach(item => {
                setCurrentData(prevState => ({...prevState, [getQueryNumber(item.url)]: item}))
            }))
    }, [])

    return (
        <div className={`info-list-container ${title} box-shadow`}>
            {!Object.keys(currentData).length ? <Loader/> :
                <>
                    <h2>{title}</h2>
                    <div className={'info-list'}>
                        {data.map(item => {
                            return (
                                <div key={item} className={'info-link'}>
                                    <Link to={`/${title}/${item}`}
                                          state={{
                                              ...currentData[item],
                                              title: title,
                                              img: `${url}/${item}.jpg`
                                          }}
                                    >
                                        <h2>{currentData[item]?.name}</h2>
                                    </Link>

                                    <img onError={(e) => e.target.src = EMPTY_IMG_LINK}
                                         src={`${url}/${item}.jpg`}
                                         alt='info image'/>
                                </div>
                            )
                        })}
                    </div>
                </>}
        </div>
    );
};

export default InfoList;