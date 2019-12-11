import React from 'react';
import { useParams } from 'react-router-dom';
import { ContextConsumer } from '../context';

export default function JobDetails() {
    let { id } = useParams();
    return (
        <div>
            <h2>Job details</h2>
            <ContextConsumer>
                {value => {
                    const { getJob } = value;
                    const job = getJob(parseInt(id));
                    console.log(job)
                    return (
                        <div>
                            <h3>{job.title}</h3>
                            <p>{job.description}</p>
                        </div>
                    );
                }}
            </ContextConsumer>
        </div>
    )
}