import React, {Component} from 'react';

class ConnectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        };
    }

    handleNameChange(event) {
        this.setState({playerName: event.target.value});
    }

    onConnect() {
        if (this.state.playerName != '') {
            this.props.onConnect({playerName: this.state.playerName});
            this.setState({playerName: ''});
        }
    }

    render() {
        if (this.props.connected) {
            return <button type='submit' onClick={this.props.onDisconnect}>
                Disconnect
            </button>;
        }
        else {
            return (
                <div >
                    <input
                        id="name-input"
                        type="text"
                        placeholder="Enter name"
                        value={this.state.playerName}
                        onChange={this.handleNameChange.bind(this)}
                    />
                    <button type='submit' onClick={this.onConnect.bind(this)}>
                        Connect
                    </button>
                </div>
            );
        }
    }
}
ConnectForm.propTypes = {
    onConnect: React.PropTypes.func.isRequired,
    onDisconnect: React.PropTypes.func.isRequired,
    connected: React.PropTypes.bool.isRequired,
};

export default ConnectForm;
