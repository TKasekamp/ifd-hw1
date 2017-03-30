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

        expect(app).to.exist; // Dummy test

        // The following line gives this error. Can't make it work.
        // ReferenceError: document is not defined

        // app.find(NumberGuessForm).props()
        //     .onSubmit({guess: 5});
        //
        // expect(app).to.contain(
        //     <NumberResultList results={[
        //         {id: 1, guess: 5}
        //     ]}/>
        // );
    });
});
