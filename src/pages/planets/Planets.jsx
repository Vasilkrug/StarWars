import React from 'react';
import {CardList} from '../../components';
import './Planets.scss';

const Planets = () => {
    return (
        <div>
            <CardList title={'planets'} img={'planets'}/>
        </div>
    );
};

export default Planets;