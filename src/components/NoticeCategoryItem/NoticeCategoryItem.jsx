
import React, {useState, useEffect} from 'react';
import {
  ImageBlock,
  Image,
  TextDiv,
  Text,
  Container,
  Item,
  LearnMore,
  TextMore,
  LearnMoreDiv,
  InGoodHands,
  Favorite,
  InfoLocation,
  InfoAge,
  InfoPol,
} from './NoticeCategoryItem.js';
import myImg from '../../images/cat.png';
import {
  PetIcon,
  FavoriteIcon,
  LocationIcon,
  AgeIcon,
  MaleIcon,
  FemaleIcon,
} from '../SvgIcons.jsx';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NoticeCard = ({ ad }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMale, setIsMale] = useState(false)

  useEffect(() => {
   
  }, []);

  const handleAddToFavorite = () => {
    if (isLoggedIn) {
      setIsFavorite(!isFavorite);
    } else {
      Notify.success('Please, sign in');
    }
  };


  return (
    <>
      <Container>
        <Item>
          <ImageBlock>
            <InGoodHands>In good hands</InGoodHands>
            <Favorite>
              <FavoriteIcon></FavoriteIcon>
            </Favorite>
            {isLoggedIn && (
          <Favorite
            onClick={handleAddToFavorite}
            disabled={isFavorite}
          >
            <FavoriteIcon></FavoriteIcon>
            {isFavorite ? "Видалити з обраних" : "Додати до обраних"}
          </Favorite>
        )}
            <InfoLocation>
              <LocationIcon></LocationIcon>
              <p></p>
            </InfoLocation>
            <InfoAge>
              <AgeIcon></AgeIcon>
              <p></p>
            </InfoAge>
            <InfoPol>
              <FemaleIcon></FemaleIcon>
              <p></p>
            </InfoPol>

            <Image src={myImg}></Image>
          </ImageBlock>
          <TextDiv>
            <Text>Сute dog looking for a home</Text>
          </TextDiv>
          <LearnMoreDiv>
            <LearnMore>
              <TextMore>Learn more</TextMore>
              <PetIcon></PetIcon>
            </LearnMore>
          </LearnMoreDiv>
        </Item>
      </Container>
    </>
  );
};

export default NoticeCard;