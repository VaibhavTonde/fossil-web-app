
import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

const ImageConatiner = styled.div`
    width: 40%;
    background-color: grey;
`

const LoginContainer = styled.div`
    width: 60%;
  
`

const LoginWrapper = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 75%;
    margin-top: 10%;
    margin-left: 25%;
`

const Title = styled.h1`
  
    font-weight: 600;
    font-size: 30px;
`

const Form = styled.form`
    padding: 25px;

`
const Button = styled.button`
    margin-top: 10px;
    padding: 10px;
    font-size: 20px;
    width: 90%;
    background-color: black;
    color:white;
    font-weight: bold;
    cursor: pointer;
`


const Register = () => {
    return (
        <Container>
                <ImageConatiner>
                </ImageConatiner>
                <LoginContainer>
                    <LoginWrapper>
                        <Title>CREATE AN ACCOUNT</Title>
                        <Form>
                            <TextField id="firstName" type="text" label="First Name" variant="outlined" style={{'width':'100%'}}/>
                            <TextField id="lastName" type="text" label="Last Name" variant="outlined" style={{'width':'100%','marginTop':'15px'}}/>
                            <TextField id="email" type="email" label="Email" variant="outlined" style={{'width':'100%','marginTop':'15px'}}/>
                            <TextField id="phoneNumber" type="text" label="Phone Number" variant="outlined" style={{'width':'100%','marginTop':'15px'}}/>
                            <TextField id="password" type="password" label="Password" variant="outlined" style={{'width':'100%','marginTop':'15px'}}/>
                            <TextField id="confirmPassword" type="password" label="Confirm Password" variant="outlined" style={{'width':'100%','marginTop':'15px'}}/>
                        </Form>
                        <Button>SIGN UP</Button>
                       
                    </LoginWrapper>
                </LoginContainer>
        </Container>
    )
}

export default Register
