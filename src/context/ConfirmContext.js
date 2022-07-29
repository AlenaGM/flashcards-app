import { createContext, useReducer } from 'react';
import { initialState, Reducer } from './Reducer';

import React from 'react';


export const ConfirmContext = createContext();

export const ConfirmContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <ConfirmContext.Provider value={[state, dispatch]}>
            {children}
        </ConfirmContext.Provider>
    );
};

export default ConfirmContextProvider;
