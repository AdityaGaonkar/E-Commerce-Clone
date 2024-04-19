import React, { createContext, useContext, useReducer } from "react";

//prepares data layer
export const StateConext = createContext();
//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateConext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateConext.Provider>
);
//pull information from the data layer
export const useStateValue = () => useContext(StateConext);
