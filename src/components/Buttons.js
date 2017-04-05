import React, {Component} from 'react';

class Buttons extends Component {
    constructor(props) {
        super(props);

        this.newNumberGame = this.newNumberGame.bind(this);
        this.newWordGame = this.newWordGame.bind(this);
    }

    newNumberGame() {
        this.props.newNumberGame();
    }

    newWordGame() {
        this.props.newWordGame();
    }


    render() {
        return (
            <div className='buttons'>
                <button id='create-number' onClick={this.newNumberGame}>
                    Create number game
                </button>
                <button id='create-word' onClick={this.newWordGame}>
                    Create word game
                </button>
            </div>
        );
    }
}

Buttons.propTypes = {
    newNumberGame: React.PropTypes.func.isRequired,
    newWordGame: React.PropTypes.func.isRequired,
};

export default Buttons;
