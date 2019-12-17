import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JobContext } from '../contexts/JobContext';
import TileBar from './TileBar';

export default function JobDetails() {
    let { id } = useParams();
    const context = useContext(JobContext);
    const { getJob } = context;
    const job = getJob(parseInt(id));
    return (
        <div>
            <TileBar >
                <h2>Job details</h2>
            </TileBar>


            <div>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
            </div>


        </div>
    )
}