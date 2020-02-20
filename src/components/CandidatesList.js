import React, { Component, useContext } from 'react';
import { CandidatesContext } from '../contexts/CandidatesContext';


export default function CandidatesList() {

    const context = useContext(CandidatesContext);

    const { candidates } = context;

    return (
        <div>
            <h2>List of candidates {candidates.length}</h2>
            <ul>
                {candidates.map(candidate=> {
                    return (<li key={candidate.id}>{candidate.firstName} {candidate.lastName}</li>)
                })}
            </ul>
        </div>
    )
}