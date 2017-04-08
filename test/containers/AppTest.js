import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/containers/App';
import GamesContainer from '../../src/containers/GamesContainer';
import ButtonContainer from '../../src/containers/ButtonContainer';

describe('App', () => {
    it('initially renders empty GamesList', () => {
        // `to.contain` checks that an exactly equal component exists
        expect(
            shallow(<App />)
        ).to.contain(
            <GamesContainer />
        );
    });

    it('renders buttons', () => {
        expect(
            shallow(<App />)
        ).to.contain(
            <ButtonContainer />
        );
    });
});
