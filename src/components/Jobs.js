import React, { Component } from 'react';
import { jobs } from "../data";

export default class Jobs extends Component {
    render() {
        console.log(jobs);
        return (
            <div>
                <h2>Browse list of Jobs </h2>
            </div>
        )
    }
}
