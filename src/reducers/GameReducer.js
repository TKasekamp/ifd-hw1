import {
    NEW_NUMBER_GAME_CREATED,
    NEW_WORD_GAME_CREATED,
    WORD_GUESS_SUBMITTED,
    NUMBER_GUESS_SUBMITTED
} from '../actions/index.js';
import {WordGame} from '../WordGame';
import {NumberGame} from '../NumberGame';


const initialState = {
    games: []
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_NUMBER_GAME_CREATED: {
            const games = state.games.concat({
                id: action.payload.id,
                type: 'guess_number',
                status: 'waiting_for_move',
                targetNumber: action.payload.targetNumber,
                moves: []
            });
            return {...state, games};
        }
        case NEW_WORD_GAME_CREATED: {
            const games = state.games.concat({
                id: action.payload.id,
                type: 'guess_word',
                status: 'waiting_for_move',
                targetWord: action.payload.targetWord,
                moves: []
            });
            return {...state, games};
        }

        case WORD_GUESS_SUBMITTED:
            // Find game by index, calculate the result with Game
            // Add to results, replace gameOver
            return {
                ...state,
                games: state.games.map((game, index) => {
                    if (index === action.payload.index) {
                        const r = WordGame.makeGuess(game.targetWord, action.payload.guess);

                        const wordGuesses = game.moves.concat({
                            id: action.payload.id,
                            guess: action.payload.guess,
                            letterMatches: r.letterMatches
                        });

                        return Object.assign({}, game, {
                            moves: wordGuesses,
                            status: r.status

                        });
                    }
                    return game;
                })
            };

        case NUMBER_GUESS_SUBMITTED:
            // Find game by index, calculate the result with Game
            // Add to results, replace gameOver
            return {
                ...state,
                games: state.games.map((game, index) => {
                    if (index === action.payload.index) {
                        const r = NumberGame.makeGuess(game.targetNumber, action.payload.guess);

                        const numberGuesses = game.moves.concat({
                            id: action.payload.id,
                            guess: action.payload.guess,
                            comparedToAnswer: r.comparedToAnswer
                        });

                        return Object.assign({}, game, {
                            moves: numberGuesses,
                            status: r.status

                        });
                    }
                    return game;
                })
            };

        default:
            return state;
    }
};

export default gameReducer;
