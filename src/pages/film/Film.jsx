import React, {useEffect, useState} from 'react';
import './Film.scss';
import {useParams} from "react-router-dom";
import {getApiData} from "../../api/api";
import {
    CHARACTERS_CATEGORY,
    filmsUrl,
    IMG_URL,
    PLANETS_CATEGORY,
    SPECIES_CATEGORY,
    STARSHIPS_CATEGORY, VEHICLES_CATEGORY
} from "../../api/constants";
import Loader from "../../components/loader/Loader";
import FilmItem from "../../components/filmItem/FilmItem";
import Slider from "../../components/slider/Slider";
import {getQueryNumbers} from "../../api/helpers";
import {arrowLeft} from "../../assets/icons/icons";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

const Film = () => {
    const [film, setFilm] = useState({})
    const params = useParams()
    const id = params.id

    useEffect(() => {
        getApiData(filmsUrl + id).then(data => {
            setFilm(data)
        })
    }, [])

    return (
        <>
            {!Object.keys(film).length ? <Loader/> :
                <div className={'page film-page'}>
                    <div className="film-preview">
                        <FilmItem id={id}
                                  title={film.title}
                                  text={film['opening_crawl']}
                                  director={film.director}
                                  release={film['release_date']}/>
                        <AnchorLink href={'#film-info'}><a className={'pointer'}>More Info <img src={arrowLeft} alt=""/></a></AnchorLink>
                    </div>
                    <div id={'film-info'} className="film-info">
                        <Slider url={`${IMG_URL}${CHARACTERS_CATEGORY}`} title={'Characters'}
                                data={getQueryNumbers(film.species)}/>
                        <Slider url={`${IMG_URL}${PLANETS_CATEGORY}`} title={'Planets'}
                                data={getQueryNumbers(film.planets)}/>
                        <Slider url={`${IMG_URL}${SPECIES_CATEGORY}`} title={'Species'}
                                data={getQueryNumbers(film.species)}/>
                        <Slider url={`${IMG_URL}${STARSHIPS_CATEGORY}`} title={'Starships'}
                                data={getQueryNumbers(film.starships)}/>
                        <Slider url={`${IMG_URL}${VEHICLES_CATEGORY}`} title={'Vehicles'}
                                data={getQueryNumbers(film.vehicles)}/>
                    </div>
                </div>
            }
        </>
    );
};

export default Film;