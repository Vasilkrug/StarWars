import React from 'react';
import {CardList} from '../../components';
import './Characters.scss';

const Characters = () => {
    return (
        <div className={'page characters-page'}>
            <CardList title={'characters'}/>
        </div>
    );
};

export default Characters;