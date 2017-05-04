import React from 'react';
import {shallow} from 'enzyme';
import GameItem from '../../../src/components/gamelist/GameItem';

describe('GameItem', () => {
    it('renders', () => {
        expect(shallow(<GameItem key="1" inFlight={'created'} type={'word_game'} status={'waiting_for_move'} id={'1'}
                                 play={sinon.stub()}
        />)).to.exist;
    });

    it('Game shows text', () => {
        const item = shallow(<GameItem key="1" inFlight={'created'} type={'word_game'} status={'waiting_for_move'}
                                       id={'1'}
                                       play={sinon.stub()}/>);
        expect(item)
            .to.include.text('created');
        expect(item)
            .to.include.text('word_game');
        expect(item)
            .to.include.text('waiting_for_move');
    });

    it('Created game has Play button', () => {
        const item = shallow(<GameItem key="1" inFlight={'created'} type={'word_game'} status={'waiting_for_move'}
                                       id={'1'}
                                       play={sinon.stub()}/>);
        expect(item)
            .to.include.text('Play');
        expect(item).to.have.exactly(1).descendants('button');
    });

    it('failed game has no Play button', () => {
        const item = shallow(<GameItem key="1" inFlight={'failed'} type={'word_game'} status={'waiting_for_move'}
                                       id={'1'}
                                       play={sinon.stub()}/>);
        expect(item)
            .to.not.include.text('Play');
        expect(item).to.not.have.descendants('button');
    });

    it('inFlight game has no Play button', () => {
        const item = shallow(<GameItem key="1" inFlight={'inFlight'} type={'word_game'} status={'waiting_for_move'}
                                       id={'1'}
                                       play={sinon.stub()}/>);
        expect(item)
            .to.not.include.text('Play');
        expect(item).to.not.have.descendants('button');
    });

    it('Play button called with correct argument', () => {
        const button = sinon.stub();
        const item = shallow(<GameItem key="1" inFlight={'created'} type={'word_game'} status={'waiting_for_move'}
                                       id={'1'}
                                       play={button}/>);

        item.find('#play-game').simulate('click');
        expect(button).to.have.been.calledWith({id: '1'});
    });
});
