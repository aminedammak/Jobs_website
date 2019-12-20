import React, { useState, useContext, useEffect } from 'react';
import { JobContext } from '../contexts/JobContext';
import uuid from 'uuid';
import { Form } from "./style";
import { Button } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';

export default function PostAJob(props) {

    const { postJob, jobs, getJob, editJob } = useContext(JobContext);

    let { id } = useParams();
    const editId = id;
    const jobToEdit = getJob(editId);

    const [newId, setNewId] = useState(jobToEdit ? jobToEdit.id : '');
    const [title, setTitle] = useState(jobToEdit ? jobToEdit.title : '');
    const [location, setLocation] = useState(jobToEdit ? jobToEdit.location : '');
    const [region, setRegion] = useState(jobToEdit ? jobToEdit.region : '');
    const [type, setType] = useState(jobToEdit ? jobToEdit.type : 'Full time');
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState(jobToEdit ? jobToEdit.description : '');
    const [applicationEmail, setApplicationEmail] = useState(jobToEdit ? jobToEdit.applicationEmail : '');
    const [minRate, setMinRatel] = useState(jobToEdit ? jobToEdit.minRate : '');
    const [maxRate, setMaxRate] = useState(jobToEdit ? jobToEdit.maxRate : '');
    const [minSalary, setMinSalary] = useState(jobToEdit ? jobToEdit.minSalary : '');
    const [maxSalary, setMaxSalary] = useState(jobToEdit ? jobToEdit.maxSalary : '');
    const [companyId, setCompanyId] = useState("1");
    const [validSubmittedJob, setValidSubmittedJob] = useState(false);
    const [redirectTo, setRedirectTo] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const id = jobToEdit ? jobToEdit.id : uuid;
        setNewId(id);
        const job = { id: id, title, location, region, type, categories, tags, description, applicationEmail, minRate, maxRate, minSalary, maxSalary, companyId };
        if (jobToEdit) {
            editJob(id, job);
        } else {
            postJob(job);
        }

        setTitle("");
        setValidSubmittedJob(true);
        const redirecting = `/jobs/${id}`;
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
