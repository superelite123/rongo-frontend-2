import React from 'react'
import styled from 'styled-components';
import PinInput from "react-pin-input";
import ErrorAlert from 'components/ErrorAlert'
const Root = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(208.73deg, #BBA884 10.82%, rgba(187, 168, 132, 0.1) 40.97%, rgba(187, 168, 132, 0.7) 61.22%, rgba(187, 168, 132, 0.5) 74.27%, #BBA884 97.22%);
`
const Positioner = styled.div`
    position: absolute;
    align-items: center;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Box = styled.div`
    width: 350px;
`;
const Title = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0;
    color: #333333;
`
const TxtEmail = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0;
    color: #BBA884;
`
const PinWrapper = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Confirm = ({email,handleComplete,error}) => {
    return (
        <Root>
            <Positioner>
                <Box>
                    <Title>パスコードを入力してください</Title>
                    <TxtEmail>{ email }</TxtEmail>
                </Box>
                {
                    <ErrorAlert>パスコードを入力してください</ErrorAlert>
                }
                <PinWrapper>
                    <PinInput
                            length={6}
                            focus 
                            inputStyle={{borderTop: 0,
                                        borderLeft:0,
                                        borderRight:0,
                                        border:'4px solid',
                                        borderColor:'white'}} 
                            type="numeric"
                            onComplete={handleComplete}
                    />
                </PinWrapper>
            </Positioner>
        </Root>
    )
}

export default Confirm