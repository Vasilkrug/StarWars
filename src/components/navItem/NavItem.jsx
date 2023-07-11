import React from 'react';
import {Link} from 'react-router-dom';
import './navItem.scss';

const NavItem = ({img, title, path}) => {
    return (
        <li className={'nav-item'} style={{backgroundImage: `url(${img})`}}>
            <Link to={path}>
                <p>{title}</p>
            </Link>
        </li>
    );
};

export default NavItem;