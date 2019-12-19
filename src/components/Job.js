import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';

export default function Job({ job }) {

    const context = useContext(JobContext);

    const { companies, getCompany } = context;
    const company = getCompany(job.companyId);
    const linkurl = `/jobs/${job.id}`;

    return (
        <div>
            <JobWrapper href={linkurl} >
                <div className="job-left">
                    <React.Fragment>
                        <img src={company.logo} alt={company.name} />

                        <div className="job-middle">
                            <h4>{job.title}</h4>

                            <span> {company.name}  </span>
                            <span>{job.region}</span>
                            <div className="average-salary">
                                <span>{job.minSalary}</span>-<span>{job.maxSalary}</span>
                            </div>
                            {job.categories && job.categories.length > 0 && job.categories.map((cat) => {
                                return (<Tag key={uuid()}>{cat}</Tag>);
                            })}
                        </div>
                    </React.Fragment>

                </div>
                <div className="job-right">
                    <Tag className="tag">{job.type}</Tag>
                </div>
            </JobWrapper>


        </div>
    )
}

Job.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        location: PropTypes.string,
        region: PropTypes.string,
        type: PropTypes.string,
        categories: PropTypes.array,
        tags: PropTypes.array,
        description: PropTypes.string,
        applicationEmail: PropTypes.string,
        minRate: PropTypes.string,
        maxRate: PropTypes.string,
        minSalary: PropTypes.string,
        maxSalary: PropTypes.string,
        companyId: PropTypes.string
    })
}

const JobWrapper = styled.a`
    border-radius: 0;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    border-left: 4px solid #eee;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    margin-top: -1px;
    width: auto;
    height: auto;
    background: #fff;
    background-color: #fff;
    color: #333;
    text-decoration: none;
    &:hover {
        background-color: #fafafa;
        color: #333;
        text-decoration: none;
    }
    img {
        width: 60px;
        height: 60px;
        border-radius: 3px;
        transform: translate3d(0,0,0);
    }
    .job-left {
        display: flex;
    }
    .job-middle {
        flex-wrap: wrap;
        padding-left: 25px;
        padding-right: 110px;
        span {
            margin-right: 13px;
        }
    }
    .average-salary {
        span:last-child {
            margin-left: 13px
        }
    }
    .tag  {
        position: absolute;
        top: 25px;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
    }
`

export const Tag = styled.span`
    border-radius: 3px;
    font-size: 12px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    color: #888;
    padding: 4px 8px;
    line-height: 18px;
    font-weight: 500;
    white-space: nowrap;
    text-align: center;
    min-width: 76px;
    border: 1px solid #e12335;
    background-color: rgba( 225,35,53,0.07);
    margin-left: 10px;
`