import React from 'react';
import {navData} from './navData';
import {NavItem} from '../index';
import './NavList.scss';

const NavList = () => {
    return (
        <nav className={'nav'}>
            <ul className={'nav-list'}>
                {navData.map(item => {
                    return (
                        <NavItem key={item.id}
                                 id={item.id}
                                 img={item.img}
                                 title={item.title}
                                 path={item.route}/>
                    )
                })}
            </ul>
        </nav>
    );
};

export default NavList;