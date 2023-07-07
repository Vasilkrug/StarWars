import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {EMPTY_IMG_LINK, IMG_URL, PEOPLE_CATEGORY, SWAPI_ROOT} from '../../api/constants';
import {getQueryNumber} from '../../api/helpers';
import './CardList.scss';
import {getSpecifiedData} from "../../api/api";
import {Loader} from "../index";

const CardList = ({title, img}) => {
    const [data, setData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(12);

    const showMore = () => {
        setItemsToShow(prevState => prevState + 12)
    }

    useEffect(() => {
        getSpecifiedData(`${SWAPI_ROOT}${title}`)
            .then(data => setData(data.flat()))
    }, [])

    return (
        <>
            {!data.length ? <Loader/>
                :
                <div className={'card-list-container'}>
                    <ul className={'card-list'}>
                        {data.slice(0, itemsToShow).map((item, index) => {
                            return (
                                <li className={'card-item box-shadow'}>
                                    <Link key={item.name}
                                          state={{
                                              ...data[index],
                                              title,
                                              img: `${IMG_URL}${title}/${getQueryNumber(item.url)}.jpg`
                                          }}
                                          to={`/${title}/${getQueryNumber(item.url)}`}>
                                        <h3>{item.name}</h3>
                                        <img
                                            src={`${IMG_URL}${img}/${getQueryNumber(item.url)}.jpg`}
                                            alt={`${title} img`}
                                            onError={(e) => e.target.src = EMPTY_IMG_LINK}
                                        />
                                    </Link>
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
            }
        </>
    );
};

export default CardList;