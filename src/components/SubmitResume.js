import React, { useContext, useState } from 'react';
import { CandidatesContext } from '../contexts/CandidatesContext';
import uuid from 'uuid';
import { Form } from "./style";
import { Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

export default function SubmitResume() {


    const { dispatch } = useContext(CandidatesContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [resumeSubmitSuccess, setResumeSubmitSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const candidate = {
            id: uuid(),
            firstName: firstName, 
            lastName: lastName
        }

        dispatch({ type: "ADD_CANDIDATE", candidate: candidate });
        setResumeSubmitSuccess(true)
    }

    return resumeSubmitSuccess ? (
        <Redirect to="/jobs" />
        ):(
        <div>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <Button variant="primary" type="submit">Add</Button>
            </Form>
        </div>
    )
}
