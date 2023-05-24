import React, {useEffect} from 'react';
import './Films.scss';
import {getApiData} from "../../api/api";


const Films = () => {
    useEffect(() => {
        getApiData('https://swapi.dev/api/films/')
            .then(data => console.log(data.results))

    }, [])
    return (
        <div className={'page films-page'}>

        </div>
    );
};

export default Films;