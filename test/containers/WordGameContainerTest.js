import React from 'react';
import {shallow} from 'enzyme';

import WordGameContainer from '../../src/containters/WordGameContainer';
import WordResultList from '../../src/components/WordResultList';
import WordGuessForm from '../../src/components/WordGuessForm';

describe('WordGameContainer', () => {
    it('initially renders empty WordResultList', () => {
        expect(
            shallow(<WordGameContainer />)
        ).to.contain(
            <WordResultList results={[]}/>
        );
    });


    it('renders WordGuessForm', () => {
        expect(
            shallow(<WordGameContainer />)
        ).to.contain.descendants(
            WordGuessForm
        );
    });

    it('adds new guess to List when submitted from Form', () => {
        const app = shallow(<WordGameContainer />);

        app.find(WordGuessForm).props().onSubmit({guess: 'yyyyy'});

        expect(app).to.contain(
            <WordResultList results={[
                {id: 1, guess: 'yyyyy', result: [false, false, false, false, false]}
            ]}/>
        );
    });
});
