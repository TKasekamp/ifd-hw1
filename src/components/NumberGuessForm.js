import React, {Component} from 'react';

class NumberGuessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    }

    handleGuessChange(event) {
        this.setState({guess: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit({guess: parseInt(this.state.guess, 10), id: this.props.id});
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
                    <p>Guess a number from 0 to 9</p>
                    <input
                        id="number-input"
                        type="number"
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
NumberGuessForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    gameOver: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired,
};

export default NumberGuessForm;
