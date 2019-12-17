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