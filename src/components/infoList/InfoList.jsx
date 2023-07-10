import React, {useEffect, useState} from 'react';
import {SWAPI_ROOT} from '../../api/constants';
import {getQueryNumber} from '../../api/helpers';
import {getSpecifiedData} from '../../api/api';
import {Loader, Pagination, InfoLink} from '../index';
import './InfoList.scss';


const InfoList = ({url, title, data, query}) => {
    const [currentData, setCurrentData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        getSpecifiedData(`${SWAPI_ROOT}${query || title}`)
            .then(data => data.flat().forEach(item => {
                setCurrentData(prevState => ({...prevState, [getQueryNumber(item.url)]: item}))
                setIsLoading(false)
            }))
    }, [])


    return (
        <div className={`info-list-container ${title} box-shadow`}>
            {isLoading ? <Loader/> :
                <>
                    <div className={'info-header'}>
                        <h2>{title}</h2>
                        <Pagination itemsPerPage={5}
                                    pageCount={pageCount}
                                    handlePageClick={handlePageClick}/>
                    </div>
                    <div className={'info-list'}>
                        {currentItems.map(item => {
                            return <InfoLink key={item}
                                             item={item}
                                             url={url}
                                             title={title}
                                             currentData={currentData}/>
                        })}
                    </div>
                </>}
        </div>
    );
};

export default InfoList;