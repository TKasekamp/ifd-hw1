import React from 'react';
import {shallow} from 'enzyme';
import GameContainer from '../../src/containers/GameContainer';
import NumberGuessForm from '../../src/components/NumberGuessForm';
import NumberResultList from '../../src/components/NumberResultList';
import WordGuessForm from '../../src/components/WordGuessForm';
import WordResultList from '../../src/components/WordResultList';

describe('GameContainer', () => {
    it('initially renders empty Game', () => {
        const game = {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'created'};
        expect(
            shallow(<GameContainer makeGuess={sinon.stub()} game={game}/>).find('.app')
        ).to.exist;
    });

    it('renders inFlight correctly', () => {
        const game = {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'inFlight'};
        const container = shallow(<GameContainer makeGuess={sinon.stub()} game={game}/>);

        expect(container).to.include.text('Number game being created');
        expect(container).to.not.contain.descendants(NumberGuessForm);
        expect(container).to.not.contain.descendants(NumberResultList);
    });

    it('renders failed correctly', () => {
        const game = {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'failed'};
        const container = shallow(<GameContainer makeGuess={sinon.stub()} game={game}/>);

        expect(container).to.include.text('Server error');
        expect(container).to.not.contain.descendants(NumberGuessForm);
        expect(container).to.not.contain.descendants(NumberResultList);
    });

    it('renders number game correctly', () => {
        const game = {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'created'};
        const onSubmit = sinon.stub();
        const container = shallow(<GameContainer makeGuess={onSubmit} game={game}/>);

        expect(container).to.include.text('Number game');
        expect(container).to.contain(<NumberGuessForm onSubmit={onSubmit} id={game.id} status={game.status}/>);
        expect(container).to.contain(<NumberResultList moves={game.moves}/>);
    });

    it('renders word game correctly', () => {
        const game = {id: '1', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'};
        const onSubmit = sinon.stub();
        const container = shallow(<GameContainer makeGuess={onSubmit} game={game}/>);

        expect(container).to.include.text('Word game');
        expect(container).to.contain(<WordGuessForm onSubmit={onSubmit} id={game.id} status={game.status}/>);
        expect(container).to.contain(<WordResultList moves={game.moves}/>);
    });
});
