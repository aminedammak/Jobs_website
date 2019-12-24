import React, { useState } from 'react';

export const CandidatesContext = React.createContext();

const CandidatesContextProvider = function (props) {

    const [candidates, setCandidates] = useState([]);

    return (
        <CandidatesContext.Provider value={{
            candidates: candidates
        }}>
            {props.children}
        </CandidatesContext.Provider>
    )
}

export { CandidatesContextProvider };