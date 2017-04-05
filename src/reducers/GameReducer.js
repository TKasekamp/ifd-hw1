import {
    NEW_NUMBER_GAME_CREATED,
    NEW_WORD_GAME_CREATED,
    WORD_GUESS_SUBMITTED,
    NUMBER_GUESS_SUBMITTED
} from '../actions/index.js';
import {WordGame} from '../WordGame';
import {NumberGame} from '../NumberGame';


const initialState = [];

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_NUMBER_GAME_CREATED: {
            const games = state.concat({
                id: action.payload.id,
                name: 'number',
                gameOver: false,
                targetNumber: action.payload.targetNumber,
                results: []
            });
            return games;
        }
        case NEW_WORD_GAME_CREATED: {
            const games = state.concat({
                id: action.payload.id,
                name: 'word',
                gameOver: false,
                targetWord: action.payload.targetWord,
                results: []
            });
            return games;
        }

        case WORD_GUESS_SUBMITTED:
            // Find game by index, calculate the result with Game
            // Add to results, replace gameOver
            return Object.assign([], state,
                state.map((game, index) => {
                    if (index === action.payload.index) {
                        const r = WordGame.makeGuess(game.targetWord, action.payload.guess);

                        const wordGuesses = game.results.concat({
                            id: action.payload.id,
                            guess: action.payload.guess,
                            result: r.result
                        });

                        return Object.assign({}, game, {
                            results: wordGuesses,
                            gameOver: r.gameOver

                        });
                    }
                    return game;
                })
            );

        case NUMBER_GUESS_SUBMITTED:
            // Find game by index, calculate the result with Game
            // Add to results, replace gameOver
            return Object.assign([], state,
                state.map((game, index) => {
                    if (index === action.payload.index) {
                        const r = NumberGame.makeGuess(game.targetNumber, action.payload.guess);

                        const numberGuesses = game.results.concat({
                            id: action.payload.id,
                            guess: action.payload.guess,
                            result: r.result
                        });

                        return Object.assign({}, game, {
                            results: numberGuesses,
                            gameOver: r.gameOver

                        });
                    }
                    return game;
                })
            );

        default:
            return state;
    }
};

export default gameReducer;
