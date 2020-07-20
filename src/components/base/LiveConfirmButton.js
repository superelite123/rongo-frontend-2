import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtil';

const Wrapper = styled.div`
    padding-top: 16px;
    padding-bottom: 17px;

    background: #BBA884;
    color: white;

    text-align: center;
    
    cursor: pointer;
    user-select: none;
    transition: .2s all;

    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    display: flex;

    &:hover {
        background: #BBA884;
        ${shadow(0)}
    }

    &:active {
        background: #BBA884;
    }
    border-radius: 5px;
`;

const LiveConfirmButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default LiveConfirmButton;