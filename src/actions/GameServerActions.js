/**
 * Created by Tonis on 19.04.2017.
 */
import jsonAjax from '../JSONAjaxRequest';
import {newNumberGameCreated, newNumberGameFailed} from './index';

const SERVER_ADDRESS = 'http://localhost:8081';

export const createNewGame = ({localId, type}) => (dispatch) => {
    jsonAjax(
        SERVER_ADDRESS + '/games',
        'POST',
        {type},
        ({id, type, status}) => dispatch(newNumberGameCreated({localId, id, type, status})),
        ({error} = {}) => dispatch(newNumberGameFailed({localId, error}))
    );
};
