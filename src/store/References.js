import {
    get
} from '../api';

const setRecived = 'SET_USER';
const setCreated = 'SET_AUTHENTICATED';

const initialState = {
    user: null,
    isAuthenticated: false
}


export const actionCreators = {
    loadCreated: () => async dispatch => {
        const response = await get(`api/users/profile`);
        dispatch({
            type: setUser,
            payload: response
        });
    },
    loadRecived: () => async dispatch => {
        const response = await get(`api/users/profile`);
        dispatch({
            type: setUser,
            payload: response
        });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === setUser) {
        return {
            ...state,
            user: action.payload
        }
    }

    if (action.type == setAuthenticated) {
        return {
            ...state,
            isAuthenticated: action.payload
        }
    }

    return state;
};