import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { transitions } from 'lib/styleUtil';

const Wrapper = styled.div`
    background:#D74936;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    font-weight: 500;
    padding: 1rem 0.5rem;
    text-align: center;
    animation: ${transitions.shake} 0.3s ease-in;
    animation-fill-mode: forwards;
`;

const ErrorAlert = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default ErrorAlert;