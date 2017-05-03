/**
 * Created by Tonis on 03.05.2017.
 */
import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import GamesContainer from '../containers/GamesContainer';

const HomePage = () => {
    return <div>
        <h1>Game lobby</h1>
        This is the best game lobby! Details from the above menu.
        <HeaderContainer />
        <GamesContainer/>
    </div>;
};

export default HomePage;
