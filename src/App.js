import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Films from "./pages/films/Films";
import Logo from "./components/logo/Logo";
import React from "react";

const App = () => {
    return (
        <main className="App">
            <Logo/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/films'} element={<Films/>}/>
            </Routes>
        </main>
    );
}

export default App;
