import React from 'react';
import {shallow} from 'enzyme';

import NumberGameContainer from '../../src/containters/NumberGameContainer';
import NumberResultList from '../../src/components/NumberResultList';
import NumberGuessForm from '../../src/components/NumberGuessForm';

describe('NumberGameContainer', () => {
    it('initially renders empty NumberResultList', () => {
        expect(
            shallow(<NumberGameContainer />)
        ).to.contain(
            <NumberResultList results={[]}/>
        );
    });


    it('renders NumberGuessForm', () => {
        expect(
            shallow(<NumberGameContainer />)
        ).to.contain.descendants(
            NumberGuessForm
        );
    });

    it('adds new guess to List when submitted from Form', () => {
        const app = shallow(<NumberGameContainer />);

        app.find(NumberGuessForm).props()
            .onSubmit({guess: 11});

        expect(app).to.contain(
            <NumberResultList results={[
                {id: 1, guess: 11, result: 'greater'}
            ]}/>
        );
    });

    it('updates gameOver when needed', () => {
        const app = shallow(<NumberGameContainer />);

        // Simulate game over status
        app.setState({gameOver: true});
        expect(app.find(NumberGuessForm).props().gameOver).to.eql(true);
    });
});
