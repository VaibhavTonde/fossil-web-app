import React from 'react'
import styled from 'styled-components'
import Announcement from '../componets/Announcement'
import Footer from '../componets/Footer'
import NavBar from '../componets/NavBar'
import { Star,StarHalf } from '@material-ui/icons'
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
flex: 2;
    width: 100vh;
    padding: 10px;
    display: grid; 
    grid-template-columns: repeat(2,minmax(350px,1fr));
    column-gap:1px;
    row-gap:5px;
`

const Image = styled.div`
    width: 20vw;
    height: 50vh;
    object-fit: cover;
    object-position: center;
    background-color: grey;
`


const ProductDetailsContainer = styled.div`
    width: 40%;
`
const Title = styled.h1`
     margin-top: 10px;
`

const Rating = styled.div`
   display: flex;
`
const Price = styled.div`
   margin-top: 50px;
`

const ProductAnnouncement = styled.p`
  color: red;
  font-weight:bold;
  margin-top: 10px;
`

const ColoursContainer = styled.div`
    display: grid;
 
    grid-template-columns: repeat(4,minmax(100px,1fr));
    grid-gap: 5px;

 
`
const ProductsColourImage = styled.div`
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: center;
    background-color: grey;

`

const Button = styled.button`
    margin-top: 10px;
    padding: 10px;
    font-size: 20px;
    width: 50%;
    background-color: black;
    color:white;
    font-weight: bold;
    cursor: pointer;
   
`

const ProductDetails = () => {
    return (
        <Container>
            <Announcement/>
            <NavBar/>
            <Wrapper>
                <ImageContainer>
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                </ImageContainer>
                <ProductDetailsContainer>
                    <Title>Product Name</Title>
                    <Rating>
                        <Star/><Star/><Star/><Star/><StarHalf/>
                        <h3>4.5</h3>
                    </Rating>
                    <Price>
                        <h2><CurrencyRupee/>14,000.00</h2>
                        <span>(Price Inclusive of GST)</span>
                    </Price>
                    <ProductAnnouncement>*Only a few left</ProductAnnouncement>
                    <h3>Colours</h3>
                    <ColoursContainer>   
                        <ProductsColourImage/>                    
                        <ProductsColourImage/>
                        <ProductsColourImage/>
                        <ProductsColourImage/>   
                        <ProductsColourImage/>                    
                    </ColoursContainer>
                    <Button>ADD TO CART</Button>
                </ProductDetailsContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default ProductDetails
