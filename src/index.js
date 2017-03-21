import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Game} from "./Game";
/*
 Result knows how to display itself.
 */
const Result = (props) => {
    let text = null;
    if (props.result == 'greater') {
        text = <p className="fail">{props.guess}: is greater than target</p>;
    }
    else if (props.result == 'lesser') {
        text = <p className="fail">{props.guess}: is lesser than target</p>;
    }
    else {
        text = <p className="win">{props.guess}: was correct</p>;
    }

    return (
        <div>
            {text}
        </div>
    );
};

Result.propTypes = {
    guess: React.PropTypes.number.isRequired,
    result: React.PropTypes.string.isRequired
};

const ResultList = (props) => {
    const resultElements = props.results.map((result) => {
        return (
            <Result guess={result.guess} result={result.result} key={result.id}>
            </Result>
        );
    });
    return (
        <div>
            <h3>Previous guesses:</h3>
            {resultElements}
        </div>
    );
};

ResultList.propTypes = {
    results: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.number,
        id: React.PropTypes.number,
        result: React.PropTypes.string
    })).isRequired
};

class GuessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '0'
        };
    }

    handleAuthorChange(event) {
        this.setState({guess: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit({guess: parseInt(this.state.guess, 10)});
    }

    render() {
        return (
            <div>
                <h3>Guess a number from 0 to 9</h3>
                <input
                    type="number"
                    placeholder="Your guess"
                    value={this.state.guess}
                    onChange={this.handleAuthorChange.bind(this)}
                />
                <button className='comment-form' onClick={this.onSubmit.bind(this)}>
                    Submit comment
                </button>
            </div>
        );
    }
}
GuessForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.game = new Game();

        this.state = {
            results: [{guess: 3, id: 1, result: 'equal'}],
            gameOver: this.game.getGameOver()
        };
    }

    handleCommentSubmit({guess}) {
        const lastComment = this.state.results[this.state.results.length - 1];
        // Calculate game stuff here
        const result = this.game.makeGuess(guess);
        this.setState({
            results: this.state.results.concat({guess, id: lastComment.id + 1, result})
        });

        this.setState({
            gameOver: this.game.getGameOver()
        });
    }

    render() {
        return (
            <div className='app'>
                <h1>Game lobby</h1>
                <GuessForm onSubmit={this.handleCommentSubmit.bind(this)}/>
                <ResultList results={this.state.results}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);