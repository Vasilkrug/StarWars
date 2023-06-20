import {Route, Routes} from 'react-router-dom';
import {Home, Films, Film} from './pages/index'
import {Logo, Loader} from './components/index';
import React, {useEffect, useState} from 'react';
import './App.scss';
import {getAllData} from "./api/api";


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
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/films'} element={<Films/>}/>
                <Route path={'/films/:id'} element={<Film/>}/>
            </Routes>
            {loading ? <Loader/> : null}
        </main>
    );
}

export default App;
