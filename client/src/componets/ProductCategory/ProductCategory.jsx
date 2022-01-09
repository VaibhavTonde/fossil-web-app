import React from 'react'
import styled from 'styled-components'
import {productCategories} from '../../Data/ProductCategory'
import ProductCategoryItems from './ProductCategoryItems'

const Container = styled.div`
   
    display: flex;  
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap ;       
`

const ProductCategory = () => {
    return (
        <Container>
           {productCategories.map((product)=>(
                <ProductCategoryItems product={product} key={product.id}/>
            ))}
        </Container>
    )
}

export default ProductCategory
