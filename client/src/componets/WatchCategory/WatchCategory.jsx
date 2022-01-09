import React from 'react'
import styled from 'styled-components'
import { categories } from '../../Data/Categories'
import WatchCategoryItems from './WatchCategoryItems'


const Container =  styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

const Category = () => {
    return (
        <Container>
            {categories.map((category) => (
                <WatchCategoryItems category={category} key={category.id}/>
            ))}
        </Container>
    )
}

export default Category
