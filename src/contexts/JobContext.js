import React, { Component, useContext } from 'react';
import { jobs, companies } from '../data';

export const JobContext = React.createContext();

class JobContextProvider extends Component {

    constructor(props) {
        super(props);

        const jobsLocalStorage = JSON.parse(localStorage.getItem("jobs"));
        console.log("jobsLocalStorage", jobsLocalStorage);
        const jobsStore = (jobsLocalStorage && jobsLocalStorage.length > 0) ? jobsLocalStorage : jobs;
        console.log("jobsStore", jobsStore)
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

    deleteJob = (id) => {
        const newJobsList = this.state.jobs.filter((job) => {
            return job.id !== id;
        });
        this.setState({ jobs: newJobsList });
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
                postJob: this.postJob,
                deleteJob: this.deleteJob
            }}>
                {this.props.children}
            </JobContext.Provider>
        )
    }
}

export { JobContextProvider };
