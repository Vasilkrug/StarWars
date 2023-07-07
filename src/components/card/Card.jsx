import React from 'react';
import {Link} from 'react-router-dom';
import {EMPTY_IMG_LINK, IMG_URL} from '../../api/constants';
import {getQueryNumber} from '../../api/helpers';
import './Card.scss';

const Card = ({name, data, title, img, url, index}) => {
    return (
        <li className={'card-item box-shadow'}>
            <Link key={name}
                  state={{
                      ...data[index],
                      title,
                      img: `${IMG_URL}${title}/${getQueryNumber(url)}.jpg`
                  }}
                  to={`/${title}/${getQueryNumber(url)}`}>
                <h3>{name}</h3>
                <img
                    src={`${IMG_URL}${img}/${getQueryNumber(url)}.jpg`}
                    alt={`${title} img`}
                    onError={(e) => e.target.src = EMPTY_IMG_LINK}
                />
            </Link>
        </li>
    );
};

export default Card;