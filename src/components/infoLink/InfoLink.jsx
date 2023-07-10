import React from 'react';
import {Link} from 'react-router-dom';
import {EMPTY_IMG_LINK} from '../../api/constants'
import './InfoLink.scss';


const InfoLink = ({item, title, currentData, url}) => {
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
    );
};

export default InfoLink;