import React from 'react';
import './Characters.scss';
import {CardList} from "../../components";

const Characters = () => {
    return (
        <div className={'page characters-page'}>
            <CardList title={'characters'}/>
        </div>
    );
};

export default Characters;