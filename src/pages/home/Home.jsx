import React from 'react';
import './Home.scss';

import NavList from "../../components/navList/NavList";

const Home = () => {
    return (
        <div className={'page home-page'}>
            <NavList/>
        </div>
    );
};

export default Home;