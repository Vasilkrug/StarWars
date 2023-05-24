import React from 'react';
import './Home.scss';
import Logo from "../../components/logo/Logo";
import NavList from "../../components/navList/NavList";

const Home = () => {
    return (
        <div className={'page home-page'}>
            <Logo/>
            <NavList/>
        </div>
    );
};

export default Home;