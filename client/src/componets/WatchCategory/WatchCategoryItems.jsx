import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 40vh;
    position: relative;
    background-color: lightgray;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
`
const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 25%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s ease;
    &:hover{
        
        transform: scale(1.1);
    }
`
const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 800;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 600;
    

`

const CategoryItems = ({category}) => {
    return (
        <Container>
            <Image src={category.img}/>
            <InfoContainer>
                <Title>{category.title}</Title>                
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Container>
    )
}

export default CategoryItems
