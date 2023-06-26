import React from 'react';
import './PageItem.scss';
import {useLocation, useParams} from "react-router-dom";
import {EMPTY_IMG_LINK} from "../../api/constants";

const PageItem = () => {
    const params = useParams();
    const location = useLocation();
    const {state} = location;
    const title = location.state.title;
    const filteredKeys = ['name', 'edited', 'films', 'created', 'url', 'title', 'img', 'pilots']

    return (
        <div className={`${title} page-item-container`}>
            <div className={'page-item-card'}>
                <h2 className={'page-item-card-title'}>
                    {state.name}</h2>
                <div className={'page-item-image'}>
                    <img src={state.img}
                         alt={`${title} image`}
                         onError={(e) => e.target.src = EMPTY_IMG_LINK}/>
                </div>
                <ul className={'page-item-info-list'}>
                    {Object.keys(state).map((key, index) => {
                        return (
                            <li key={index}>
                                {filteredKeys.includes(key) ? null
                                    : <h3>{key}:
                                        <span>{state[key]}</span>
                                    </h3>}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PageItem;