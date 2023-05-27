import {Route, Routes} from 'react-router-dom';
import {Home, Films, Film} from './pages/index'
import {Logo} from './components/index';
import React from 'react';
import './App.scss';


const App = () => {
    return (
        <main className='App'>
            <Logo/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/films'} element={<Films/>}/>
                <Route path={'/films/:id'} element={<Film/>}/>
            </Routes>
        </main>
    );
}

export default App;
