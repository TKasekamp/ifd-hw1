import React, {Component} from 'react';

class WordGuessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {guess: ''};
    }

    handleGuessChange(event) {
        this.setState({guess: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit({guess: this.state.guess});
        this.setState({guess: ''});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.state.guess != '') {
            this.onSubmit();
        }
    }

    render() {
        if (this.props.gameOver) {
            return (<div>You won!</div>);
        } else {
            return (
                <div >
                    <p>Guess a 5 letter word</p>
                    <input
                        type="text"
                        placeholder="Your guess"
                        value={this.state.guess}
                        onChange={this.handleGuessChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                </div>
            );
        }
    }
}
WordGuessForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    gameOver: React.PropTypes.bool.isRequired
};

export default WordGuessForm;
