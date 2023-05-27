import React from 'react';
import {Link} from 'react-router-dom';
import './navItem.scss';

const NavItem = ({img, title, path}) => {
    return (
        <Link to={path}>
            <li className={'nav-item'}>
                <img src={img} alt={title}/>
                <p>{title}</p>
            </li>
        </Link>
    );
};

export default NavItem;