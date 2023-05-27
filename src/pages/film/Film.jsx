import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getApiData} from '../../api/api';
import {filmsUrl,} from '../../api/constants';
import {Loader, FilmItem, FilmInfo} from '../../components/index'
import {arrowLeft} from '../../assets/icons/icons';
import AnchorLink from 'react-anchor-link-smooth-scroll/lib/anchor-link';
import './Film.scss';

const Film = () => {
    const [film, setFilm] = useState({});
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        getApiData(filmsUrl + id).then(data => {
            setFilm(data)
        })
    }, [])

    return (
        <>
            {!Object.keys(film).length ? <Loader/> :
                <div className={'page film-page'}>
                    <div className='film-preview'>
                        <FilmItem id={id}
                                  title={film.title}
                                  text={film['opening_crawl']}
                                  director={film.director}
                                  release={film['release_date']}/>
                        <AnchorLink href={'#film-info'}>
                            <a className={'pointer'}>
                                More Info
                                <img src={arrowLeft} alt='arrow'/></a>
                        </AnchorLink>
                    </div>
                    <FilmInfo film={film}/>
                </div>
            }
        </>
    );
};

export default Film;