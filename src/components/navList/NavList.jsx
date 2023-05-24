import React from 'react';
import './NavList.scss';
import {navData} from "./navData";
import NavItem from "../navItem/NavItem";

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