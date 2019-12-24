import React, { useContext, useState } from 'react';
import { CandidatesContext } from '../contexts/CandidatesContext';


export default function SubmitResume() {


    const { dispatch } = useContext(CandidatesContext);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const candidate = {
            name: name
        }

        dispatch({ type: "ADD_CANDIDATE", candidate: candidate });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </form>
        </div>
    )
}
