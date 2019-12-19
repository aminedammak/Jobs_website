import React, { Component, useContext } from 'react';
import { jobs, companies } from '../data';

export const JobContext = React.createContext();

class JobContextProvider extends Component {

    state = {
        jobs: jobs,
        companies: companies
    }

    getCompany = (id) => {
        return this.state.companies.find(item => item.id === id);
    }

    getJob = (id) => {
        return this.state.jobs.find(item => item.id === id);
    }

    postJob = (job) => {
        this.setState({ jobs: [...this.state.jobs, job] });
    }

    render() {
        return (
            <JobContext.Provider value={{
                ...this.state,
                getCompany: this.getCompany,
                getJob: this.getJob,
                postJob: this.postJob
            }}>
                {this.props.children}
            </JobContext.Provider>
        )
    }
}

export { JobContextProvider };
