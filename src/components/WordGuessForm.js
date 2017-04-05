import React, {Component} from 'react';

class WordGuessForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guess: '',
            id: this.props.id
        };
    }

    handleGuessChange(event) {
        this.setState({guess: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit(this.state);
        this.setState({guess: ''});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.state.guess !== '') {
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
                        id="word-input"
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
    gameOver: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired
};

export default WordGuessForm;
