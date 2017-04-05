import {
    NEW_NUMBER_GAME_CREATED,
    NEW_WORD_GAME_CREATED,
    WORD_GUESS_SUBMITTED
} from '../actions/index.js';
import {WordGame} from '../WordGame';



const initialState = [];

const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_NUMBER_GAME_CREATED: {

            const games = state.concat({
                id: action.payload.id,
                name: 'number'

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
            return Object.assign([], state,
                state.map((game, index) => {
                    console.log(action.payload);
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

                        })
                    }
                    return game;
                })
            )

        default:
            return state;
    }
};

export default gameReducer;