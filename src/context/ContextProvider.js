import React, { createContext, useReducer } from 'react';

export const GlobalContext = createContext();

const initialState = {
    entries: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                entries: state.entries.filter(entry => entry.id !== action.payload)
            }
        default:
            return state;
    }
}
const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;