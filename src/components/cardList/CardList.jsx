import React, {useEffect, useState} from 'react';
import {Loader, Card} from '../index';
import {SWAPI_ROOT} from '../../api/constants';
import {getSpecifiedData} from '../../api/api';
import './CardList.scss';

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
                            return <Card key={item.name}
                                         title={title}
                                         data={data}
                                         name={item.name}
                                         url={item.url}
                                         img={img}
                                         index={index}/>
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