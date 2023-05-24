import React from 'react';
import './Logo.scss';

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={require('../../assets/icons/logo.png')} alt=""/>
            <p>Discovery</p>
        </div>
    );
};

export default Logo;