import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();
const userInfo = Cookies.get('userInfo');

const initialState = {
	userInfo: userInfo ? JSON.parse(userInfo) : null,
};

function reducer(state, action) {
	switch (action.type) {
    case 'SET_OPEN':
     return {...state, open: action.payload}
		case 'USER_LOGIN':
			return { ...state, userInfo: action.payload };
		case 'USER_LOGOUT':
			return {
				...state,
				userInfo: null,
			};
		default:
			return state;
	}
}

export function StoreProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
