import * as React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
    return <div className='navbar'>
        <ul>
            <Link to='/'>
                Home page
            </Link>
            <Link to='/createGame'>
                Create game
            </Link>
            <Link to='/ongoingGames'>
                Ongoing games
            </Link>
            <Link to='/finishedGames'>
                Finished games
            </Link>
            <Link to='/players'>
                Players
            </Link>
        </ul>
    </div>;
};

export default NavBar;
