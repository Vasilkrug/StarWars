import React from 'react';
import './navItem.scss';

const NavItem = ({id, img, title}) => {
    return (
        <li>
            <li key={id} className={'nav-item'}>
                <img src={img} alt={title}/>
                <p>{title}</p>
            </li>
        </li>
    );
};

export default NavItem;