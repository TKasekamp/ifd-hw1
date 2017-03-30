import React from 'react';
import {shallow} from 'enzyme';

import WordGuessForm from '../../src/components/WordGuessForm';

describe('WordGuessForm', () => {
    it('renders', () => {
        expect(shallow(
            <WordGuessForm onSubmit={sinon.stub()} gameOver={false}/>
        )).to.exist;
    });

    it('calls submit with author and text when submit button clicked', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<WordGuessForm onSubmit={onSubmit} gameOver={false}/>);

        form.setState({guess: 'thing'});

        form.find('#word-input').simulate('keyPress', {key: 'Enter'});

        expect(form.state()).to.eql({guess: ''});
        expect(onSubmit).to.have.been.calledWith({guess: 'thing'});
    });

    it('no call when no input', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<WordGuessForm onSubmit={onSubmit} gameOver={false}/>);

        form.setState({guess: ''});

        form.find('#word-input').simulate('keyPress', {key: 'Enter'});

        expect(form.state()).to.eql({guess: ''});
        expect(onSubmit).to.not.have.been.calledWith({guess: 'thing'});
    });

    it('clears state when submit button clicked', () => {
        const form = shallow(<WordGuessForm onSubmit={sinon.stub()} gameOver={false}/>);

        form.setState({guess: 'thing'});
        form.find('#word-input').simulate('keyPress', {key: 'Enter'});
        expect(form.state()).to.eql({guess: ''});
    });

    it('no input when game won', () => {
        const form = shallow(<WordGuessForm onSubmit={sinon.stub()} gameOver={true}/>);

        expect(form).to.include.text('You won!');
        expect(form).to.not.have.descendants('input');
    });
});

