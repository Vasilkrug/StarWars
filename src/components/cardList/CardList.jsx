import React, {useEffect, useMemo, useState} from 'react';
import {Loader, Card, SearchForm} from '../index';
import {SWAPI_ROOT} from '../../api/constants';
import {getSpecifiedData} from '../../api/api';
import './CardList.scss';

const CardList = ({title, img}) => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('')
    const [itemsToShow, setItemsToShow] = useState(12);

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

    const showMore = () => {
        setItemsToShow(prevState => prevState + 12)
    }

    const filteredData = useMemo(() => {
        return data.filter(({name}) => name.toLowerCase().includes(inputValue.toLowerCase()))
    }, [inputValue, data])

    useEffect(() => {
        getSpecifiedData(`${SWAPI_ROOT}${title}`)
            .then(data => setData(data.flat()))
    }, [title])

    return (
        <>
            {!data.length ? <Loader/>
                :
                <div className={'card-list-container'}>
                    <SearchForm inputValue={inputValue}
                                onChange={inputHandler}
                                onClick={setInputValue}/>
                    <ul className={'card-list'}>
                        {filteredData.slice(0, itemsToShow).map((item, index) => {
                            return <Card key={item.name}
                                         title={title}
                                         data={filteredData}
                                         name={item.name}
                                         url={item.url}
                                         img={img}
                                         index={index}/>
                        })}
                    </ul>
                    {!filteredData.length ? <h2>Items not found</h2> : null}
                    {itemsToShow >= filteredData.length ? null :
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