import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
        if (this.props.status === 'finished') {
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
    onSubmit: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default NumberGuessForm;
