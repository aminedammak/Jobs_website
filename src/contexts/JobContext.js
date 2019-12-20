import React, { Component, useContext } from 'react';
import { jobs, companies } from '../data';

export const JobContext = React.createContext();

class JobContextProvider extends Component {

    constructor(props) {
        super(props);

        const jobsLocalStorage = JSON.parse(localStorage.getItem("jobs"));
        const jobsStore = (jobsLocalStorage) ? jobsLocalStorage : jobs;

        this.state = {
            jobs: jobsStore,
            companies: companies
        }
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

    componentDidUpdate() {
        localStorage.setItem("jobs", JSON.stringify(this.state.jobs));

    }

    render() {
        console.log(this.props.history);

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
