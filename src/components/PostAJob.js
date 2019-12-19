import React, { useState, useContext, useEffect } from 'react';
import { JobContext } from '../contexts/JobContext';
import uuid from 'uuid';

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
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} />
                <label>Region</label>
                <input value={region} onChange={(e) => setRegion(e.target.value)} />
                <label>Type</label>
                <input value={type} onChange={(e) => setType(e.target.value)} />
                {/* <label>Category</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} /> */}
                <button type="submit">Post</button>
            </form>
        </div>
    )
}
