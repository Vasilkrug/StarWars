import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Films from "./pages/films/Films";
import Logo from "./components/logo/Logo";
import React from "react";
import Film from "./pages/film/Film";

const App = () => {
    return (
        <main className="App">
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
