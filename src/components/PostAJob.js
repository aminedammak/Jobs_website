import React, { useState, useContext, useEffect } from 'react';
import { JobContext } from '../contexts/JobContext';
import uuid from 'uuid';
import { Form } from "./style";
import { Button } from 'react-bootstrap';

export default function PostAJob() {

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [region, setRegion] = useState('');
    const [type, setType] = useState('Full time');
    const [category, setCategory] = useState([]);
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState("");
    const [applicationEmail, setApplicationEmail] = useState("");
    const [minRate, setMinRatel] = useState("");
    const [maxRate, setMaxRate] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [companyId, setCompanyId] = useState("1");

    const { postJob, jobs } = useContext(JobContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const job = { id: uuid(), title, location, region, type, category, tags, description, applicationEmail, minRate, maxRate, minSalary, maxSalary, companyId };
        postJob(job);
        setTitle("");
    }

    return (
        <div>
            <div class="alert alert-primary" role="alert">
                You are currently signed in as ... <a class="btn btn-primary" href="#" role="button">Sign out</a>
            </div>
            <Form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Region</label>
                    <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div class="form-group">
                    {/* <label>Category</label>
                    <input value={category} onChange={(e) => setCategory(e.target.value)} /> */}
                </div>

                <Button variant="primary" type="submit">Post</Button>

            </Form>
        </div>
    )
}
