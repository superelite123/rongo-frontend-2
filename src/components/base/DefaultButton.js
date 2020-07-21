import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtil';

const Wrapper = styled.div`
    padding:16px 0px;
    width:270px;
    background: #5DB83D;
    color: white;

    text-align: center;
    
    min-width: 140px;
    cursor: pointer;
    user-select: none;
    transition: .2s all;

    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.teal[7]};
    }
    border-radius: 5px;
`;

const DefaultButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default DefaultButton;