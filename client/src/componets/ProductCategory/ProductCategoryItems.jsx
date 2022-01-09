import styled from 'styled-components'
import React from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'

const Container = styled.div`     
  
    height: 350px;
   
`

const Image = styled.img`
    height: 75%;   
    object-fit: cover; 
    
`
const InfoContainer = styled.div`
    width: 80%;
    height: 15%;
    left: 0;
    
      
`
// const Icon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 10px;
//     cursor: pointer;
//     color: white;
//     transition: all 0.8s ease;

//     &:hover{
//         background-color: black;
//         transform: scale(1.1);
//     }
// `

const ProductCategoryItems = ({product}) => {
    return (
        <Container>           
            <Image src={product.img}/>
          {/* <InfoContainer>
                hello
            </InfoContainer>  */}
        </Container>
    )
}

export default ProductCategoryItems
