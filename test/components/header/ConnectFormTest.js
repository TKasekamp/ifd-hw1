import React from 'react';
import {shallow} from 'enzyme';
import ConnectForm from '../../../src/components/header/ConnectForm';

describe('ConnectForm', () => {
    it('renders', () => {
        expect(shallow(
            <ConnectForm onConnect={sinon.stub()} onDisconnect={sinon.stub()} connected={false}/>
        )).to.exist;
    });

    it('submits guess when enter pressed', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<ConnectForm onConnect={onSubmit} onDisconnect={sinon.stub()} connected={false}/>);

        form.find('#name-input').simulate('change', {target: {value: 'aaa'}});

        form.find('button').simulate('click');

        expect(onSubmit).to.have.been.calledWith({playerName: 'aaa'});
    });

    it('no call when no input', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<ConnectForm onConnect={onSubmit} onDisconnect={sinon.stub()} connected={false}/>);

        form.setState({playerName: ''});

        form.find('button').simulate('click');

        expect(onSubmit).to.not.have.been.calledWith({playerName: ''});
    });

    it('clears state when submit button clicked', () => {
        const form = shallow(<ConnectForm onConnect={sinon.stub()} onDisconnect={sinon.stub()} connected={false}/>);

        form.setState({playerName: '2'});
        form.find('button').simulate('click');
        expect(form.state()).to.eql({playerName: ''});
    });

    it('renders disconnect button with action', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<ConnectForm onDisconnect={onSubmit} onConnect={sinon.stub()} connected={true}/>);

        form.find('button').simulate('click');

        expect(onSubmit).to.have.been.calledWith();
    });
});
