import React, { Component } from 'react';
import { ContextConsumer } from '../context';
import Job from './Job';

export default class JobsList extends Component {
    render() {
        return (
            <div>
                <h2>Browse list of Jobs </h2>
                <ContextConsumer>
                    {value => {
                        const { jobs } = value;
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
                    }}
                </ContextConsumer>
            </div>
        )
    }
}
