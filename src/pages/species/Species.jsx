import React from 'react';
import {CardList} from '../../components';
import './Species.scss';

const Species = () => {
    return (
        <div className={'species-page'}>
            <CardList title={'species'} img={'species'}/>
        </div>
    );
};

export default Species;