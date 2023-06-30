import React from 'react';
import loader from '../../assets/icons/stormtrooper.svg';
import './Loader.scss';

const Loader = () => {
    return (
        <div className={'loader'}>
            <img src={loader} alt='loader'/>
        </div>
    );
};

export default Loader;