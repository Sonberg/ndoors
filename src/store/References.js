import {
    get
} from '../api';

const setRecived = 'SET_RECIVED';
const setCreated = 'SET_CREATED';

const initialState = {
    recived: [],
    created: []
}


export const actionCreators = {
    loadCreated: email => async dispatch => {
        const response = await get(`api/references?userEmail=${email}`);
        dispatch({
            type: setCreated,
            payload: response
        });
    },
    loadRecived: email => async dispatch => {
        const response = await get(`api/references?referentEmail=${email}`);
        dispatch({
            type: setRecived,
            payload: response
        });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === setCreated) {
        return {
            ...state,
            created: action.payload
        }
    }

    if (action.type == setRecived) {
        return {
            ...state,
            recived: action.payload
        }
    }

    return state;
};