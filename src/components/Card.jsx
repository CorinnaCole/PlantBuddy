import React, {useState, useEffect} from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import {HeaderContainer, TitleHeader, LogoHolder} from './Styled/styles.jsx';
import {FaBars} from 'react-icons/fa';
import axios from 'axios';
import { CardType } from "../../Types";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./Styled/Cards.styled.jsx";
// import cactus from '../../images/pinkPot.png';


  export const Card = () => {
    return (
        <CardWrapper>
          <CardImage background={imgUrl} />
          <CardTextWrapper>
            {/* <CardTextDate>{date} days ago</CardTextDate> */}
            <CardTextTitle>{title}</CardTextTitle>
            <CardTextBody>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </CardTextBody>
          </CardTextWrapper>
          <CardStatWrapper>
            {/* <CardStats>
              <div>
                1<sup>m</sup>
              </div>
              <div>read</div>
            </CardStats> */}
            <CardStats>
              <LinkText href="#">website</LinkText>
            </CardStats>
            <CardStats>
              <LinkText href="#">github</LinkText>
            </CardStats>
          </CardStatWrapper>
        </CardWrapper>
    );
  };
