import React from 'react';
import {logo} from '../../assets/icons/icons';
import './Logo.scss';

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={logo} alt='logo'/>
            <p>Discovery</p>
        </div>
    );
};

export default Logo;