import React, { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Tilt from "react-parallax-tilt";
import { HeaderContainer, TitleHeader, LogoHolder } from './Styled/styles.jsx';
import { FaBars } from 'react-icons/fa';
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
  CardImageDiv
} from "./Styled/Cards.styled.jsx";



export const Card = ({ plant }) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImageDiv>
          <CardImage src={plant.myImage} />
        </CardImageDiv>
        <CardTextWrapper>
          {/* <CardTextDate>{date} days ago</CardTextDate> */}
          <CardTextTitle>"{plant.firstName}"</CardTextTitle>
          <CardTextTitle>{plant.commonName}</CardTextTitle>
          {/* <CardTextTitle>{scientificName}</CardTextTitle> */}
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