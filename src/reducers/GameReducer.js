import {
    NEW_NUMBER_GAME_CREATED,
    NEW_WORD_GAME_CREATED,
    WORD_GUESS_SUBMITTED,
    NUMBER_GUESS_SUBMITTED
} from '../actions/index.js';
import {WordGame} from '../WordGame';
import {NumberGame} from '../NumberGame';
import {
    NEW_NUMBER_GAME_FAILED, NEW_NUMBER_GAME_REQUESTED, NUMBER_GUESS_FAILED,
    NUMBER_GUESS_SUCCEEDED
} from '../actions/index';


const initialState = {
    games: []
};

export const IN_FLIGHT = 'inFlight';
export const CREATED = 'created';
export const FAILED = 'failed';


const gameReducer = (state = initialState, action) => {
        switch (action.type) {
            case NEW_NUMBER_GAME_REQUESTED: {
                return {
                    ...state,
                    games: state.games.concat({
                        id: action.payload.localId,
                        inFlight: IN_FLIGHT,
                        type: action.payload.type,
                        status: '',
                        moves: []
                    })
                };
            }

            case NEW_NUMBER_GAME_CREATED: {
                const games = state.games.map((game) => {
                    if (game.id === action.payload.localId) {
                        return {
                            ...game,
                            id: action.payload.id,
                            inFlight: CREATED,
                            type: action.payload.type,
                            status: action.payload.status
                        };
                    } else {
                        return game;
                    }
                });

                return {...state, games};
            }

            case NEW_NUMBER_GAME_FAILED: {
                return {
                    ...state,
                    games: state.games.map((game) => {
                        if (game.id === action.payload.localId) {
                            return {...game, inFlight: FAILED};
                        } else {
                            return game;
                        }
                    })
                }
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

            case
            WORD_GUESS_SUBMITTED:
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
                return {
                    ...state,
                    games: state.games.map((game) => {
                        if (game.id === action.payload.gameId) {

                            const numberGuesses = game.moves.concat({
                                id: action.payload.id,
                                guess: action.payload.guess,
                                comparedToAnswer: '',
                                inFlight: IN_FLIGHT
                            });

                            return Object.assign({}, game, {
                                moves: numberGuesses
                            });
                        }
                        return game;
                    })
                };


            case NUMBER_GUESS_SUCCEEDED: {
                // Find game, find move, update stuff
                const games = state.games.map((game) => {
                    if (game.id === action.payload.game.id) {
                        const moves = game.moves.map((move) => {
                                if (move.id === action.payload.id) {
                                    return {
                                        ...move,
                                        guess: action.payload.move.guess,
                                        comparedToAnswer: action.payload.move.comparedToAnswer,
                                        inFlight: CREATED
                                    }
                                }
                                else {
                                    return move;
                                }
                            }
                        );
                        return {
                            ...game,
                            moves: moves,
                            status: action.payload.game.status
                        };
                    } else {
                        return game;
                    }
                });
                return {...state, games};
            }

            case NUMBER_GUESS_FAILED: {
                // Have to go through all games because no game id
                const games = state.games.map((game) => {
                    const moves = game.moves.map((move) => {
                            if (move.id === action.payload.id) {
                                return {
                                    ...move,
                                    inFlight: FAILED
                                }
                            }
                            else {
                                return move;
                            }
                        }
                    );
                    return {
                        ...game,
                        moves: moves
                    };
                });
                return {...state, games};
            }
            default:
                return state;
        }
    }
;

export default gameReducer;
