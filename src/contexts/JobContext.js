import React, { Component, useContext } from 'react';
import { jobs, companies } from '../data';

export const JobContext = React.createContext();

class JobContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: jobs,
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

    componentDidMount() {
        const jobsLocalStorage = JSON.parse(localStorage.getItem("jobs"));
        const jobsStore = (jobsLocalStorage) ? jobsLocalStorage : jobs;
        this.setState({ jobs: jobsStore });
    }

    componentDidUpdate() {
        console.log(this.state.jobs);
        localStorage.setItem("jobs", JSON.stringify(this.state.jobs));
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
