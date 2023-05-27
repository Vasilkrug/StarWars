import React from 'react';
import './Logo.scss';
import {logo} from '../../assets/icons/icons';

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={logo} alt='logo'/>
            <p>Discovery</p>
        </div>
    );
};

export default Logo;