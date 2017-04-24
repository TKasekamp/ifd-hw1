import React from 'react';
import {shallow} from 'enzyme';

import Games from '../../src/components/Games';
import NumberGameContainer from '../../src/containers/NumberGameContainer';
import WordGameContainer from '../../src/containers/WordGameContainer';
import Buttons from '../../src/components/Buttons';

describe('Games', () => {
    it('no render if player not connected', () => {
        const games = shallow(<Games games={[]} connected={false} newNumberGame={sinon.stub()}
                                     newWordGame={sinon.stub()} wordGuess={sinon.stub()} numberGuess={sinon.stub()}/>);
        expect(games).to.exist;
        expect(games).to.not.contain.descendants(Buttons);
        expect(games).to.not.contain.descendants(NumberGameContainer);
        expect(games).to.not.contain.descendants(WordGameContainer);
    });

    it('renders if no games', () => {
        const games = shallow(<Games games={[]} connected={true} newNumberGame={sinon.stub()}
                                     newWordGame={sinon.stub()} wordGuess={sinon.stub()} numberGuess={sinon.stub()}/>);
        expect(games).to.exist;
        expect(games).to.contain.descendants(Buttons);
        expect(games).to.not.contain.descendants(NumberGameContainer);
        expect(games).to.not.contain.descendants(WordGameContainer);
    });

    it('renders game for each input', () => {
        const games = [
            {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'created'},
            {id: '2', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'},
            {id: '3', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'}
        ];

        const gameList = shallow(<Games games={games} connected={true} newNumberGame={sinon.stub()}
                                        newWordGame={sinon.stub()} wordGuess={sinon.stub()}
                                        numberGuess={sinon.stub()}/>);

        expect(gameList).to.have.exactly(1).descendants(NumberGameContainer);
        expect(gameList).to.have.exactly(2).descendants(WordGameContainer);
    });
});
