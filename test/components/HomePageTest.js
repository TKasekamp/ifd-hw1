import React from 'react';
import {shallow} from 'enzyme';
import GamesContainer from '../../src/containers/GamesContainer';
import HeaderContainer from '../../src/containers/HeaderContainer';
import HomePage from '../../src/components/HomePage';

describe('HomePage', () => {
    it('initially renders empty GamesList', () => {
        // `to.contain` checks that an exactly equal component exists
        expect(
            shallow(<HomePage />)
        ).to.contain(
            <GamesContainer />
        );
    });

    it('renders buttons', () => {
        expect(
            shallow(<HomePage />)
        ).to.contain(
            <HeaderContainer />
        );
    });
});
