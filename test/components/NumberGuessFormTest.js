import React from 'react';
import {shallow} from 'enzyme';

import NumberGuessForm from '../../src/components/NumberGuessForm';

describe('NumberGuessForm', () => {
    it('renders', () => {
        expect(shallow(
            <NumberGuessForm onSubmit={sinon.stub()} gameOver={false}/>
        )).to.exist;
    });

    it('submits guess when enter pressed', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<NumberGuessForm onSubmit={onSubmit} gameOver={false}/>);

        form.setState({guess: '4'});

        form.find('#number-input').simulate('keyPress', {key: 'Enter'});

        expect(onSubmit).to.have.been.calledWith({guess: 4});
    });

    it('no call when no input', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<NumberGuessForm onSubmit={onSubmit} gameOver={false}/>);

        form.setState({guess: ''});

        form.find('#number-input').simulate('keyPress', {key: 'Enter'});

        expect(onSubmit).to.not.have.been.calledWith({guess: ''});
    });

    it('clears state when submit button clicked', () => {
        const form = shallow(<NumberGuessForm onSubmit={sinon.stub()} gameOver={false}/>);

        form.setState({guess: '2'});
        form.find('#number-input').simulate('keyPress', {key: 'Enter'});
        expect(form.state()).to.eql({guess: ''});
    });

    it('no input when game won', () => {
        const form = shallow(<NumberGuessForm onSubmit={sinon.stub()} gameOver={true}/>);

        expect(form).to.include.text('You won!');
        expect(form).to.not.have.descendants('input');
    });
});

