import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import ConfirmButton from 'components/base/ConfirmButton';

const Root = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #8A0E00 0%, #D74936 100%);
`
const Positioner = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Box = styled.div`
    width: 300px;
`;
const LogoWrapper = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Title = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0;
    color: white;
`
// 하단 그래디언트 테두리
const TitleBorder = styled.div`
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;
const InputWrapper = styled.div`
    width:100%;
`;
const Input = styled.input`
    width: 96%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding-left: 0.5rem;
`;

const Login = ({handleChange}) => {
    return (
        <Root>
            <Positioner>
                <Box>
                    <LogoWrapper>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
                    </LogoWrapper> 
                    <Title>ログイン</Title>
                    <TitleBorder />
                    <InputWrapper>
                        <Input name='email' placeholder="メールアドレス" onChange={ handleChange } />
                        <Input name='password' placeholder="パスワード" onChange={ handleChange } type='password'/>
                        <ConfirmButton>ログインする</ConfirmButton>
                    </InputWrapper>
                </Box>
            </Positioner>
        </Root>
    )
}

export default Login