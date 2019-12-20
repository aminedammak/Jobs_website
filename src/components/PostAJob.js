import React, { useState, useContext, useEffect } from 'react';
import { JobContext } from '../contexts/JobContext';
import uuid from 'uuid';
import { Form } from "./style";
import { Button } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';

export default function PostAJob(props) {

    const [newId, setNewId] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [region, setRegion] = useState('');
    const [type, setType] = useState('Full time');
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState("");
    const [applicationEmail, setApplicationEmail] = useState("");
    const [minRate, setMinRatel] = useState("");
    const [maxRate, setMaxRate] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [companyId, setCompanyId] = useState("1");
    const [validSubmittedJob, setValidSubmittedJob] = useState(false);
    const [redirectTo, setRedirectTo] = useState("");


    const { postJob, jobs } = useContext(JobContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        setNewId(id);
        console.log("setNewId", id);
        const job = { id: id, title, location, region, type, categories, tags, description, applicationEmail, minRate, maxRate, minSalary, maxSalary, companyId };
        postJob(job);
        setTitle("");
        setValidSubmittedJob(true);
        const redirecting = `/jobs/${id}`;
        console.log(redirecting);
        setRedirectTo(redirecting)
    }

    const handleCategoriesSelect = function (e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setCategories(value);
    }

    const handleTagsSelect = function (e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setTags(value);
    }

    return validSubmittedJob ? (
        <Redirect to={redirectTo} />
    ) : (
            <div>
                <div className="alert alert-primary" role="alert">
                    You are currently signed in as ... <a className="btn btn-primary" href="#" role="button">Sign out</a>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Region</label>
                        <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Categories</label>
                        <select value={categories} onChange={(e) => handleCategoriesSelect(e)} multiple className="form-control">
                            <option>Design</option>
                            <option>Fullstack</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>System</option>
                            <option>Test</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Tags</label>
                        <select value={tags} onChange={(e) => handleTagsSelect(e)} multiple className="form-control">
                            <option>php</option>
                            <option>node.js</option>
                            <option>reactjs</option>
                            <option>Java</option>
                            <option>C++</option>
                            <option>Photoshop</option>
                        </select>
                    </div>

                    <Button variant="primary" type="submit">Post</Button>
                </Form>

            </div>
        )

}
