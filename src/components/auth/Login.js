import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import ConfirmButton from 'components/base/ConfirmButton';
import ErrorAlert from 'components/ErrorAlert'
import { ChasingDots } from 'better-react-spinkit'

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
    width: 350px;
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

    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
`
const TitleBorder = styled.div`
    margin-top: 8px;
    height: 3px;
    width: 100%;
    background: #BBA884;
`;
const InputWrapper = styled.div`
    width:100%;
`;
const Input = styled.input`
    width: 96%;
    height: 45px;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    margin-top: 1rem;
    padding-left: 0.5rem;
    color: #333333;

    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;

    &::placeholder {
        color: #BDBDBD;
    }

    &:-ms-input-placeholder {
        color: #BDBDBD;
    }
`;

const Login = ({handleChange,error,handleSubmit}) => {
    return (
        <Root>
            <Positioner>
                <Box>
                    <LogoWrapper>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
                    </LogoWrapper>
                    <Title>ログイン</Title>
                    <TitleBorder />
                    {
                        error && <ErrorAlert>{error}</ErrorAlert>
                    }
                    <InputWrapper>
                        <Input name='email' placeholder="メールアドレス" onChange={ handleChange } />
                        <Input name='password' placeholder="パスワード" onChange={ handleChange } type='password'/>
                        <ConfirmButton onClick={handleSubmit}>ログインする</ConfirmButton>
                    </InputWrapper>
                </Box>
            </Positioner>
        </Root>
    )
}

export default Login