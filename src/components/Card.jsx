import React, { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Tilt from "react-parallax-tilt";
import { HeaderContainer, TitleHeader, LogoHolder } from './Styled/styles.jsx';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
// import { CardType } from "../../Types";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
  CardImageDiv,
  CardDelete
} from "./Styled/Cards.styled.jsx";



export const Card = ({ plant }) => {
  return (
    <Tilt>
      <CardWrapper>
      {/* <CardDelete><FaWindowClose/></CardDelete> */}
        <CardImageDiv>
          <CardImage src={plant.myImage} />

        </CardImageDiv>
        <CardTextWrapper>
          <CardTextTitle>"{plant.firstName}"</CardTextTitle>
          <CardTextTitle>{plant.commonName}</CardTextTitle>
          <CardTextBody>
            {plant.wikiSummary}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardStats>
            <span>Scientific Name: </span>
            <LinkText> {plant.scientificName} </LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};

export default Card;