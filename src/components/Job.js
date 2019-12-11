import React from 'react';
import { ContextConsumer } from '../context';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Job({ job }) {
    return (
        <div>
            <ContextConsumer>
                {value => {
                    const { companies, getCompany } = value;
                    const company = getCompany(job.companyId);
                    return (
                        <JobWrapper href="#">
                            <div className="job-left">
                                <img src={company.logo} alt={company.name} />
                                <div className="job-middle">
                                    <h4>{job.title}</h4>
                                    <span>{company.name}</span>
                                    <span>{job.region}</span>
                                    <div className="average-salary">
                                        <span>{job.minSalary}</span>-<span>{job.maxSalary}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="job-right">
                                <Tag >{job.type}</Tag>
                            </div>
                        </JobWrapper>
                    );
                }}
            </ContextConsumer>

        </div>
    )
}

Job.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        location: PropTypes.string,
        region: PropTypes.string,
        type: PropTypes.string,
        category: PropTypes.array,
        tags: PropTypes.array,
        description: PropTypes.string,
        applicationEmail: PropTypes.string,
        minRate: PropTypes.string,
        maxRate: PropTypes.string,
        minSalary: PropTypes.string,
        maxSalary: PropTypes.string,
        companyId: PropTypes.number
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
`

const Tag = styled.span`
    border-radius: 3px;
    font-size: 12px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    color: #888;
    padding: 4px 8px;
    line-height: 18px;
    font-weight: 500;
    position: absolute;
    top: 25px;
    right: 25px;
    white-space: nowrap;
    text-align: center;
    min-width: 76px;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #e12335;
    background-color: rgba( 225,35,53,0.07);
`