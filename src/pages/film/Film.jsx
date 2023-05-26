import React, {useEffect, useState} from 'react';
import './Film.scss';
import {useParams} from "react-router-dom";
import {getApiData} from "../../api/api";
import {filmsUrl} from "../../api/constants";
import Loader from "../../components/loader/Loader";
import FilmItem from "../../components/filmItem/FilmItem";

const Film = () => {
    const [film,setFilm] = useState({})
    const params = useParams()
    const id = params.id

    useEffect(() => {
        getApiData(filmsUrl + id).then(data => {
            setFilm(data)
        })
    },[])
    return (
        <>
        {!Object.keys(film).length ? <Loader/> :
        <div className={'page film-page'}>
            <FilmItem id={id}
                      title={film.title}
                      text={film['opening_crawl']}
                      director={film.director}
                      release={film['release_date']}/>
        </div>
        }
        </>
    );
};

export default Film;