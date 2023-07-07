import React from 'react';
import {CardList} from '../../components';
import './Characters.scss';

const Characters = () => {
    return (
        <div className={'page characters-page'}>
            <CardList title={'people'} img={'characters'}/>
        </div>
    );
};

export default Characters;