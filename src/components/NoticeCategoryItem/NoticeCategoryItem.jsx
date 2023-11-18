import React, { useState, useEffect } from 'react';
const fs = require('fs')
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
import { PetIcon, FavoriteIcon, LocationIcon, AgeIcon, MaleIcon, FemaleIcon } from '../SvgIcons.jsx';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NoticeCard = () => {
  const [data, setData] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMale, setIsMale] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let mounted = true;  // Move the declaration inside useEffect

      try {
        const response = await fetch('./data.json');

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const jsonData = await response.json();

          // Check if the component is still mounted before updating state
          if (mounted) {
            setData(jsonData);
          }
        } else {
          throw new Error('Invalid content type. Expected JSON.');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        Notify.failure(`Error fetching data: ${error.message}`);
      }

      // Cleanup function to set the mounted flag to false when the component is unmounted
      return () => {
        mounted = false;
      };
    };

    fetchData();
  }, []);

  const handleAddToFavorite = () => {
    if (isLoggedIn) {
      setIsFavorite(!isFavorite);
    } else {
      Notify.success('Please, sign in');
    }
  };

  const handleLearnMore = () => {
    // Implement your logic for "Learn more"
  };

  return (
    <>
      {data.map(ad => (
        <Container key={ad.id}>
          <Item>
            <InfoLocation>
              <LocationIcon></LocationIcon>
              <p>{ad.location}</p>
            </InfoLocation>
            <InfoAge>
              <AgeIcon></AgeIcon>
              <p>{ad.age}</p>
            </InfoAge>
            <InfoPol>
              <FemaleIcon></FemaleIcon>
              <p>{ad.sex}</p>
            </InfoPol>
          </Item>
        </Container>
      ))}
    </>
  );
};

export default NoticeCard;