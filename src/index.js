import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JobContextProvider } from "./contexts/JobContext";

ReactDOM.render(
    <JobContextProvider>
        <App />
    </JobContextProvider>, document.getElementById('root'));
