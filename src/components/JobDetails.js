import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JobContext } from '../contexts/JobContext';
import TileBar from './TileBar';
import { Tag } from './Job';
import { JobDetailsElement } from './style';

export default function JobDetails() {
    let { id } = useParams();
    const context = useContext(JobContext);
    const { getJob, getCompany } = context;
    const job = getJob(parseInt(id));
    const company = getCompany(job.companyId);
    const srclogo = `${window.location.origin}/${company.logo}`;
    return (
        <JobDetailsElement className="job-details">
            <TileBar >
                <h2>{job.title}<Tag className="tag">{job.type}</Tag></h2>
            </TileBar>

            <div>
                <div className="company-header">
                    <img src={srclogo} alt={company.name} />
                    <div className="company-info">
                        <h3>{company.name}</h3>
                    </div>
                </div>
                <p>{job.description}</p>
            </div>
        </JobDetailsElement>
    )
}

