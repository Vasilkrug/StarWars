import React from 'react';
import {Link} from 'react-router-dom';
import './navItem.scss';

const NavItem = ({img, title, path}) => {
    return (
        <li className={'nav-item'}>
            <Link to={path}>
                <img src={img} alt={title}/>
                <p>{title}</p>
            </Link>
        </li>
    );
};

export default NavItem;