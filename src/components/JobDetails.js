import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JobContext } from '../contexts/JobContext';
import TileBar from './TileBar';
import { Tag } from './Job';
import { JobDetailsElement } from './style';
import uuid from 'uuid';

export default function JobDetails(props) {
    let { id } = useParams();

    const context = useContext(JobContext);
    const { jobs, getJob, getCompany } = context;
    const job = getJob(id);
    const company = getCompany(job.companyId);
    const srclogo = `${window.location.origin}/${company.logo}`;

    return (
        <JobDetailsElement className="job-details">
            <TileBar >
                <h2>{job.title}<Tag className="tag">{job.type}</Tag></h2>
            </TileBar>

            {
                job.tags.map((tag) => {
                    return (<span key={uuid()} className="badge badge-secondary m-1">{tag}</span>);
                })
            }
            <div>
                <div className="company-header">
                    <img src={srclogo} alt={company.name} />
                    <div className="company-info">
                        <h3>{company.name}</h3>
                    </div>
                </div>
                <p>{job.description}</p>
            </div>
            <span>test</span>
        </JobDetailsElement >
    )
}

