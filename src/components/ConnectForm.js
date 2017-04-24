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
        this.props.onConnect({playerName: this.state.playerName});
        this.setState({playerName: ''});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.state.playerName != '') {
            this.onConnect();
        }
    }

    render() {
        if (this.props.connected) {
            return (<button type='submit' onClick={props.onDisconnect}>
                Disconnect
            </button>);
        } else {
            return (
                <div >
                    <input
                        id="name-input"
                        type="text"
                        placeholder="Enter name"
                        value={this.state.playerName}
                        onChange={this.handleNameChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                </div>
            );
        }
    }
}
ConnectForm.propTypes = {
    onConnect: React.PropTypes.func.isRequired,
    onDisconnect: React.PropTypes.func.isRequired,
    connected: React.PropTypes.bool.isRequired
};

export default ConnectForm;
