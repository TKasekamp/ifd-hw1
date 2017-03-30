import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/containters/App';
import Games from '../../src/components/Games';

describe('App', () => {
    it('initially renders empty GamesList', () => {
        // `to.contain` checks that an exactly equal component exists
        expect(
            shallow(<App />)
        ).to.contain(
            <Games games={[]}/>
        );
    });

    it('renders buttons', () => {
        expect(
            shallow(<App />)
        ).to.contain.exactly(2).descendants(
            'button'
        );
    });

    it('creates new word game when button clicked', () => {
        const app = shallow(<App />);

        app.find('#create-word').simulate('click');

        expect(app).to.contain(
            <Games games={[
                {id: 1, name: 'word'}
            ]}/>
        );
    });

    it('creates new number game when button clicked', () => {
        const app = shallow(<App />);

        app.find('#create-number').simulate('click');

        expect(app).to.contain(
            <Games games={[
                {id: 1, name: 'number'}
            ]}/>
        );
    });
});
