import React, { useReducer } from 'react';
import candidatesReducer from '../reducers/candidatesReducer';
export const CandidatesContext = React.createContext();

const CandidatesContextProvider = function (props) {

    const [candidates, dispatch] = useReducer(candidatesReducer, []);

    return (
        <CandidatesContext.Provider value={{
            candidates: candidates,
            dispatch
        }}>
            {props.children}
        </CandidatesContext.Provider>
    )
}

export { CandidatesContextProvider };