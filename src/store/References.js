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
    loadCreated: () => async dispatch => {
        const response = await get(`api/references/created`);
        dispatch({
            type: setCreated,
            payload: response
        });
    },
    loadRecived: () => async dispatch => {
        const response = await get(`api/references/recived`);
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