import { createContext, useContext, useReducer } from "react";



export const DataLayerContext = createContext();

// jiske ander app wrap kiya h for data passage/Provider
export const DataLayer = ({ initialState, reducer, children }) => (

  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);