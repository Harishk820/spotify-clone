import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

// jiske ander app wrap kiya h for data passage
export const DataLayer = ({ initailState, reducer, children }) => {

  <DataLayerContext.Provider value={useReducer(reducer, initailState)}>
    {children}
  </DataLayerContext.Provider>
}

export const useStateProvider = () => useContext(DataLayerContext);