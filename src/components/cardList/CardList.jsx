import React, {useEffect, useState} from 'react';
import './CardList.scss';
import {EMPTY_IMG_LINK, IMG_URL} from "../../api/constants";
import {getQueryNumber} from "../../api/helpers";

const CardList = ({title}) => {
    const [data, setData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(10);

    const showMore = () => {
        setItemsToShow(prevState => prevState + 10)
    }

    useEffect(() => {
        const storage = localStorage.getItem('data')
        setData(JSON.parse(storage)[title])
    }, [])

    return (
        <div className={'card-list-container'}>
            <ul className={'card-list'}>
                {data.slice(0, itemsToShow).map(item => {
                    return (
                        <li key={item.name} className={'card-item'}>
                            <h3>{item.name}</h3>
                            <img
                                src={`${IMG_URL}${title}/${getQueryNumber(item.url)}.jpg`}
                                alt={`${title} img`}
                                onError={(e) => e.target.src = EMPTY_IMG_LINK}
                            />
                        </li>
                    )
                })}
            </ul>
            {itemsToShow >= data.length ? null :
                <button onClick={showMore}
                        className={'show-more'}>
                    Show More
                </button>}
        </div>
    );
};

export default CardList;