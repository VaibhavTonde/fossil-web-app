
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
    font-size: 40px;
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

const Link = styled.a`
    margin: 5px 0px;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
                <ImageConatiner>
                </ImageConatiner>
                <LoginContainer>
                    <LoginWrapper>
                        <Title>SIGN IN</Title>
                        <Form>
                            <TextField id="email" label="Email" variant="outlined" style={{'width':'100%'}}/>
                            <TextField id="password" label="Password" variant="outlined" style={{'width':'100%','marginTop':'15px'}}/>
                        </Form>
                        <Button>LOGIN</Button>
                        <Link>Forgot Password</Link>
                        <Link>Sign Up</Link>
                    </LoginWrapper>
                </LoginContainer>
        </Container>
    )
}

export default Login
