import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider } from "styled-react-modal";

const HeaderContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
    top: -15px;
    left: 0px;
  z-index: 2;
  padding-right: 50px;
  padding-left: 40px;
  background-color: #417154;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  font-family: 'Bad Script', cursive;
  border-bottom: solid 4px #104730;
  padding-left: 25px;

`;
// font-family: 'MuseoModerno', cursive;
// font-family: 'Roboto', sans-serif;

const BodyDiv = styled.div`
box-sizing: border-box;
position: relative;
  top: 75px;
  left: 0px;
padding: 20px;
margin: 0;
background-color: white;
display: flex;
justify-content: space-between;
height: auto;
width: 100%;
`

const TitleHeader = styled.h1`
  font-family: 'MuseoModerno', cursive;
  font-size: 2em;
  padding-top: 40px;
  color: #F6F6DB;
  margin: 0 0 15px 30px;
`;

const LogoHolder = styled.img`
  position: fixed;
    top: 0px;
    left: 0px;
  z-index: 2;
`;

const StyledModal = Modal.styled`
  width: 75%;
  height: 50%;
  border-radius: 5%;
  border: solid 10px #F8C5CD;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;


export {HeaderContainer, TitleHeader, BodyDiv, LogoHolder, StyledModal};


// export const CardWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 300px;
//   grid-template-rows: 210px 210px 80px;
//   grid-template-areas: "image" "text" "stats";
//   border-radius: 18px;
//   background: #588061;
//   box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
//   text-align: center;
// `;

// export const CardImage = styled.div<{ background: string }>`
//   grid-area: image;
//   background-image: url(${({ background }) => background});
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
//   background-size: cover;
// `;

// export const CardTextWrapper = styled.div`
//   grid-area: text;
//   margin: 25px;
// `;

// export const CardTextDate = styled.span`
//   color: rgb(255, 7, 110);
//   font-size: 13px;
// `;

// export const CardTextTitle = styled.h2`
//   margin-top: 0px;
//   font-size: 2rem;
//   box-sizing: border-box;
//   min-width: 0px;
//   line-height: 1.2;
//   margin: 0px;
//   background: linear-gradient(
//     110.78deg,
//     rgb(118, 230, 80) -1.13%,
//     rgb(249, 214, 73) 15.22%,
//     rgb(240, 142, 53) 32.09%,
//     rgb(236, 81, 87) 48.96%,
//     rgb(255, 24, 189) 67.94%,
//     rgb(26, 75, 255) 85.34%,
//     rgb(98, 216, 249) 99.57%
//   );
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
// `;

// export const CardTextBody = styled.p`
//   color: grey;
//   font-size: 15px;
//   font-weight: 300;
// `;

// export const CardStatWrapper = styled.div`
//   grid-area: stats;
//   display: grid;
//   /* grid-template-columns: 1fr 1fr 1fr; */
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr;

//   border-bottom-left-radius: 15px;
//   border-bottom-right-radius: 15px;
//   background: #5930e5;
// `;

// export const CardStats = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   color: white;
//   padding: 10px;
// `;

// export const LinkText = styled.a`
//   color: #fff;
//   text-decoration: none;
// `;
