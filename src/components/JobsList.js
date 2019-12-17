import React, { Component, useContext } from 'react';
import Job from './Job';
import { JobContext } from '../contexts/JobContext';

export default function JobsList() {
    const context = useContext(JobContext);

    const renderResult = () => {
        const { jobs } = context;
        if (jobs.length === 0) {
            return (<h3>There is no job offers</h3>)
        }
        return (
            <div className="jobs-list">
                {jobs.map(item => {
                    return (<Job key={item.id} job={item} />);
                })}
            </div>
        )
    }

    return (
        <div>
            <h2>Browse list of Jobs </h2>
            {renderResult()}
        </div>
    )
}
