import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    top: 0px;
    width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: left;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
`;

// 로고
const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 0.05;
`;

const Header = ({children,height,mode}) => {
    const logoMode = mode == 1
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Spacer/>
                    {
                        logoMode && 
                        <Logo><img width='150' height='28' src={process.env.PUBLIC_URL + '/images/logo.png'} /></Logo>
                    }
                </HeaderContents>
            </WhiteBackground>
        </Positioner>
    );
};

export default Header;