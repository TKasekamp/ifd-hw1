import React from 'react';
import {shallow} from 'enzyme';

import WordGuessForm from '../../src/components/WordGuessForm';

describe('WordGuessForm', () => {
    it('renders', () => {
        expect(shallow(
            <WordGuessForm id={'3'} onSubmit={sinon.stub()} status='waiting_for_move'/>
        )).to.exist;
    });

    it('submits guess when enter pressed', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<WordGuessForm id={'3'} onSubmit={onSubmit} status='waiting_for_move'/>);

        form.setState({guess: 'thing'});

        form.find('#word-input').simulate('keyPress', {key: 'Enter'});

        expect(onSubmit).to.have.been.calledWith({guess: 'thing', id: '3'});
    });

    it('no call when no input', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<WordGuessForm id={'3'} onSubmit={onSubmit} status='waiting_for_move'/>);

        form.setState({guess: ''});

        form.find('#word-input').simulate('keyPress', {key: 'Enter'});

        expect(onSubmit).to.not.have.been.calledWith({guess: 'thing'});
    });

    it('clears state when submit button clicked', () => {
        const form = shallow(<WordGuessForm id={'3'} onSubmit={sinon.stub()} status='waiting_for_move'/>);

        form.setState({guess: 'thing'});
        form.find('#word-input').simulate('keyPress', {key: 'Enter'});
        expect(form.state()).to.eql({guess: ''});
    });

    it('no input when game won', () => {
        const form = shallow(<WordGuessForm id={'3'} onSubmit={sinon.stub()} status='finished'/>);

        expect(form).to.include.text('You won!');
        expect(form).to.not.have.descendants('input');
    });
});

