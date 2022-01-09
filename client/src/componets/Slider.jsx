import { ArrowBackIosOutlined,ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data/Slider'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color:grey;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    bottom: 0%;
    margin: auto;
    left: ${props => props.position === "left" && "10px"};
    right: ${props => props.position === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slide * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
`
const ImageConatiner = styled.div`
    height: 100%;
    flex: 1;
    position: absolute;    
   
`
const Image = styled.img`
    height: 100%;
    object-fit: cover;
   
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    position: absolute;
    width: 100%;
    height: 100%;
    top:25%;
    left: 65%;
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; */
     
`
const Title = styled.h1`
    font-size: 50px;
`
const Description = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: black;
        color: white;
        transform: scale(1.1);
    }
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlider = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }


    return (
        <Container>
            <Arrow position="left" onClick={()=> handleSlider("left")}>
                <ArrowBackIosOutlined/>
            </Arrow>
            <Wrapper slide = {slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide key={item.id}>
                        <ImageConatiner >
                            <Image src={item.img}></Image>
                        </ImageConatiner>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
              
               
            </Wrapper>
            <Arrow  position="right" onClick={()=> handleSlider("right")}> 
                <ArrowForwardIosOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
