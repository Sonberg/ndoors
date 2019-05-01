import Cookies from 'browser-cookies'
import {
    get,
    post
} from '../api';

const setUser = 'SET_USER';
const setAuthenticated = 'SET_AUTHENTICATED';

const initialState = {
    user: null,
    isAuthenticated: Cookies.get('connect.sid') != null
}


export const actionCreators = {
    init: () => async dispatch => {
        const response = await get('api/auth/authenticated');
        const isAuthenticated = response && response.isAuthenticated;

        dispatch({
            type: setAuthenticated,
            payload: isAuthenticated
        });

        if (!isAuthenticated) {
            return;
        }

        const user = await get(`api/users/profile`);
        dispatch({
            type: setUser,
            payload: user
        });

    },
    logout: () => dispatch => {
        post('api/auth/logout');

        // Set authenticated false
        dispatch({
            type: setAuthenticated,
            payload: false
        });

        // Clear user
        dispatch({
            type: setUser,
            payload: null
        });
    },
    loadUser: () => async dispatch => {
        dispatch({
            type: setUser,
            payload: await get(`api/users/profile`)
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