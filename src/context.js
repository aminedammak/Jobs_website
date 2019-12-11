import React, { Component } from 'react';
import { jobs, companies } from './data';

const Context = React.createContext();

class ContextProvider extends Component {

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

    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                getCompany: this.getCompany,
                getJob: this.getJob
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ContextConsumer = Context.Consumer;

export { ContextProvider, ContextConsumer };
