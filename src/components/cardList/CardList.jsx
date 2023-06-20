import React, {useEffect, useState} from 'react';
import './CardList.scss';
import {IMG_URL} from "../../api/constants";
import {getQueryNumber} from "../../api/helpers";

const CardList = ({title}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const storage = localStorage.getItem('data')
        setData(JSON.parse(storage)[title])
    }, [])

    return (
        <ul className={'card-list'}>
            {data.map(item => {
                return (
                    <li className={'card-item'}>
                        <h3>{item.name}</h3>
                        <img src={`${IMG_URL}${title}/${getQueryNumber(item.url)}.jpg`} alt=""/>
                    </li>
                )
            })}
        </ul>
    );
};

export default CardList;