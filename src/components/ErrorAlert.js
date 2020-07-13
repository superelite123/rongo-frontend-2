import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { transitions } from 'lib/styleUtil';

const Wrapper = styled.div`
    background:#D74936;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    text-align: center;
    animation: ${transitions.shake} 0.3s ease-in;
    animation-fill-mode: forwards;

    padding-top: 11px;
    padding-bottom: 12px;

    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
`;

const ErrorAlert = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default ErrorAlert;