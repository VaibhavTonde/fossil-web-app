import React from 'react'
import styled from 'styled-components'
import Navbar from '../componets/NavBar'
import Announcement from '../componets/Announcement'
import ProductFilter from '../componets/ProductFilter'
import ProductCategory from '../componets/ProductCategory/ProductCategory'
import NewsLetter from '../componets/NewsLetter'
import Footer from '../componets/Footer'

const Container = styled.div`
`

const Title = styled.h1`
    margin: 30px;
`


const Wrapper = styled.div`
    width: 100%;
    height:150vh;
  
`

const FilterContainer = styled.div`
    margin:5%;
    width: 15%;
    height: 100%;
    position: absolute;   
     
  
    
`

const ProductContainer = styled.div`
    margin: 5%;
    width: 75%;
    height: 100%;
    position: absolute;    
    right: 0;
  
    
`

const ProductsPage = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Title>Smartwatches</Title>
            <Wrapper>
               <FilterContainer>
                    <ProductFilter/>
                </FilterContainer>
                <ProductContainer>
                <ProductCategory/>
                </ProductContainer> 
               
            </Wrapper>
            {/* <ProductCategory/> */}
          
              
        </Container>
    )
}

export default ProductsPage
