import  styled from 'styled-components'
import React from 'react'


const Container = styled.div`
    display: flex;
    margin: 20px;
    height: 65vh;
    position: relative;   
`

const Image = styled.img`
    width: 80%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;  
    opacity: 0.9;
`

const InfoContainer = styled.div` 
    
    position: absolute;
    width: 50%;
    height: 50%;
    top:25%;
    right: 0px;
`

const Title = styled.h1`
    font-size: 50px;
    color: black;
`

const Description = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: black;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    color:black;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: black;
        color: white;
        transform: scale(1.1);
    }
`

const SunGlassessCover = () => {

    return (
        <Container>
            <Image src="/img/sunglasses-cover.png"/>
                <InfoContainer>
                    <Title>FOSSIL SUNGLASSES</Title>
                    <Description>DISCOVER THE LATEST FASHION</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>   
         </Container>
    )
}

export default SunGlassessCover
