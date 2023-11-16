import React from "react";
import {ImageBlock, Image, TextDiv, Text, Container, Item, LearnMore, TextMore, LearnMoreDiv } from './NoticeCategoryItem.js'
import myImg from '../../images/cat.png'


const NoticeCard = ({ announcement }) => {
  
  

  
  const handleAddToFavorite = () => {
  }
      
   


  return (
    
        <>
        <Container>
            <Item>
      <ImageBlock>
        <Image src={myImg}></Image>
      </ImageBlock>
      <TextDiv>
        <Text>Сute dog looking 
for a home</Text>

      </TextDiv>
      <LearnMoreDiv>
      <LearnMore>
        <TextMore>Learn more</TextMore>
      </LearnMore>
      </LearnMoreDiv>
      </Item>
      
      </Container>
      </>
    
  );
};

export default NoticeCard;