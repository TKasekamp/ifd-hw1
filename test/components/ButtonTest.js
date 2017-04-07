import React from 'react';
import {shallow} from 'enzyme';

import Buttons from '../../src/components/Buttons';

describe('ButtonTest', () => {
    it('renders buttons', () => {
        const newWordGame = sinon.stub();
        const newNumberGame = sinon.stub();
        expect(
            shallow(<Buttons newWordGame={newWordGame} newNumberGame={newNumberGame}/>)
        ).to.contain.exactly(2).descendants(
            'button'
        );
    });

    it('calls word game when button clicked', () => {
        const newWordGame = sinon.stub();
        const newNumberGame = sinon.stub();
        const app = shallow(<Buttons newWordGame={newWordGame} newNumberGame={newNumberGame}/>);

        app.find('#create-word').simulate('click');
        expect(newWordGame).to.have.been.calledWith();
    });

    it('calls number game when button clicked', () => {
        const newWordGame = sinon.stub();
        const newNumberGame = sinon.stub();
        const app = shallow(<Buttons newWordGame={newWordGame} newNumberGame={newNumberGame}/>);

        app.find('#create-number').simulate('click');
        expect(newNumberGame).to.have.been.calledWith();
    });
});
