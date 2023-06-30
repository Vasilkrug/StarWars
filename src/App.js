import {Route, Routes} from 'react-router-dom';
import {PageItem, Home, Films, Film, Characters, Species, Vehicles, Planets, Starships} from './pages/index'
import {Logo, Loader, BreadCrumbs} from './components/index';
import React, {useEffect, useState} from 'react';
import {getAllData} from './api/api';
import './App.scss';

const App = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('data')) {
            setLoading(true)
            getAllData().then(data => {
                localStorage.setItem('data', JSON.stringify(data))
                setLoading(false)
            })
        }
    }, [])

    return (
        <main className='App'>
            <Logo/>
            <BreadCrumbs/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/films'} element={<Films/>}/>
                <Route path={'/characters'} element={<Characters/>}/>
                <Route path={'/species'} element={<Species/>}/>
                <Route path={'/vehicles'} element={<Vehicles/>}/>
                <Route path={'/planets'} element={<Planets/>}/>
                <Route path={'/starships'} element={<Starships/>}/>
                <Route path={'/films/:id'} element={<Film/>}/>
                <Route path={'/species/:id'} element={<PageItem/>}/>
                <Route path={'/planets/:id'} element={<PageItem/>}/>
                <Route path={'/starships/:id'} element={<PageItem/>}/>
                <Route path={'/vehicles/:id'} element={<PageItem/>}/>
                <Route path={'/characters/:id'} element={<PageItem/>}/>
            </Routes>
            {loading ? <Loader/> : null}
        </main>
    );
}

export default App;
