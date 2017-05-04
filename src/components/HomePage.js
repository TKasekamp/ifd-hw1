/**
 * Created by Tonis on 03.05.2017.
 */
import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import GamesContainer from '../containers/GamesContainer';

const HomePage = () => {
    return <div>
        <h1>Game lobby</h1>
        <div style={{width: 600 + 'px'}}>
            <p>
                This is the best game lobby! Details from the above menu.
            </p>
            <p>
                Everything from HW6 works on this page.
            </p>
            <p>
                The player connect input is only here as I didn't notice the GIF at the end of the lecture until
                everything was finished and I don't want to change stuff again.
            </p>
        </div>
        <HeaderContainer />
        <GamesContainer/>
    </div>;
};

export default HomePage;
