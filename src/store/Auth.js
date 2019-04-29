import {
    get,
    post
} from '../api';

const setUser = 'SET_USER';
const setAuthenticated = 'SET_AUTHENTICATED';

const initialState = {
    user: null,
    isAuthenticated: false
}


export const actionCreators = {
    init: async dispatch => {
        const response = await get('api/auth/authenticated');
        const isAuthenticated = response && response.isAuthenticated;

        dispatch({
            type: setAuthenticated,
            payload: isAuthenticated
        });

        if (isAuthenticated) {
            const user = await get(`api/users/profile`);
            dispatch({
                type: setUser,
                payload: user
            });
        }

    },
    logout: () => dispatch => {
        dispatch({
            type: setAuthenticated,
            payload: false
        });
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    },
    loadUser: () => async dispatch => {
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