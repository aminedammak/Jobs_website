import styled from 'styled-components';

import React from 'react'

export const JobDetailsElement = styled.div`
     img {
        width: 100px;
        height: 100px;
        border-radius: 3px;
        -webkit-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    .company-header {
        display: flex;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 33px;
        margin-bottom: 35px;
        .company-info {
            margin-left: 20px;
        }
    }
`

export const Form = styled.form`
    .fake-input, input[type="text"], input[type="password"], input[type="email"], input[type="number"], input[type="tel"], input[type="phone"], input[type="url"], textarea, select {
        padding: 14px 18px;
        outline: none;
        font-size: 15px;
        color: #909090;
        margin: 0;
        max-width: 100%;
        width: 100%;
        box-sizing: border-box;
        display: block;
        background-color: #fcfcfc;
        font-weight: 500;
        border: 1px solid #e0e0e0;
        opacity: 1;
        border-radius: 3px;
    }
    label {
        margin-bottom: 9px;
        font-size: 16px;
        line-height: 28px;
        color: #333;
        font-weight: 500;
    }
`