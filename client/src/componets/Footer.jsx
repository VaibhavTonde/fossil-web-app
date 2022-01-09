import { Facebook, Instagram, MailOutline, Phone, Pinterest, Twitter,Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
   
    bottom: 0;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`    
`
const Description = styled.p`
    margin: 15px 0px;
`
const SocialContainer = styled.h1`
    display: flex;
`
const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-top: 25px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width:  50%;
`

const Footer = () => {
    return (
        <Container>
        <Left>
          <Logo>FOSSIL</Logo>
          <Description>
            Fossil is an American watch and lifestyle company, creatively rooted in authentic vintage and classic design. We strive to create high-quality watches, bags, jewelry and more that preserve the best of the past while updating it for today.
          </Description>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Discover Us</Title>
          <List>
            <ListItem>Fossil Group</ListItem>
            <ListItem>Make Time For Good</ListItem>
            <ListItem>Fossil Foundation</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Store Locator</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    )
}

export default Footer
