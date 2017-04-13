import React from 'react';
import {shallow} from 'enzyme';

import NumberGuessForm from '../../src/components/NumberGuessForm';

describe('NumberGuessForm', () => {
    it('renders', () => {
        expect(shallow(
            <NumberGuessForm id={3} onSubmit={sinon.stub()} status='waiting_for_move'/>
        )).to.exist;
    });

    it('submits guess when enter pressed', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<NumberGuessForm id={3} onSubmit={onSubmit} status='waiting_for_move'/>);

        form.setState({guess: '4'});

        form.find('#number-input').simulate('keyPress', {key: 'Enter'});

        expect(onSubmit).to.have.been.calledWith({guess: 4, id: 3});
    });

    it('no call when no input', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<NumberGuessForm id={3} onSubmit={onSubmit} status='waiting_for_move'/>);

        form.setState({guess: ''});

        form.find('#number-input').simulate('keyPress', {key: 'Enter'});

        expect(onSubmit).to.not.have.been.calledWith({guess: ''});
    });

    it('clears state when submit button clicked', () => {
        const form = shallow(<NumberGuessForm id={3} onSubmit={sinon.stub()} status='waiting_for_move'/>);

        form.setState({guess: '2'});
        form.find('#number-input').simulate('keyPress', {key: 'Enter'});
        expect(form.state()).to.eql({guess: ''});
    });

    it('no input when game won', () => {
        const form = shallow(<NumberGuessForm id={3} onSubmit={sinon.stub()} status='finished'/>);

        expect(form).to.include.text('You won!');
        expect(form).to.not.have.descendants('input');
    });
});

