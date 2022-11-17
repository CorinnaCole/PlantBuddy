import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider } from "styled-react-modal";

const MainConter = styled.div`
box-sizing: border-box;
display: flex;
  margin: 0px;
  padding: 0px;
`;
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
  height: 100px;
  width: 100%;
  border-bottom: solid 4px #104730;
  padding-left: 25px;

`;
// font-family: 'MuseoModerno', cursive;
// font-family: 'Roboto', sans-serif;

const BodyDiv = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
position: relative;
  top: 75px;
  left: 0px;
padding: 20px;
margin: 0;
background-color: #d1e2d3;;
height: auto;
width: 100%;
`

const TitleHeader = styled.h1`
  font-family: 'MuseoModerno', cursive;
  font-size: 2em;
  padding-top: 40px;
  color: #F8C5CD;
  text-shadow: 2px 2px #104730;
  margin: 0 0 15px 0;
`;


const AddBuddy = styled.h3`
  font-family: 'MuseoModerno', cursive;
  font-size: 1.5em;
  padding-top: 50px;
  color: #F8C5CD;
  text-shadow: 2px 2px #104730;
  margin: 0 15px 15px 0;
  box-sizing: border-box;
  width: 100%;
  justify-content: flex-end;
`;

const LogoAndTitleHolder = styled.div`
box-sizing: border-box;
padding-right: 50px;
padding-left: 40px;
display: flex;
height: 100px;
width: 100%;
padding-left: 25px;

`;
const LogoHolder = styled.img`
  transform: scale(.7);
`;

const StyledModal = Modal.styled`
  width: 75%;
  height: 50%;
  border-radius: 5%;
  border: solid 10px #F8C5CD;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  svg {
    stroke: #333;
    stroke-width: 20px;
    fill: palevioletred;
    font-size: 2em;
  }

  background-color: white;

  transition : all 0.3s ease-in-out;`;

const ModalInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  `;
const ModalButtonHolder = styled.div`
    grid-row-start: 4;
    display: flex;
    justify-content: center;

  `;

const ModalButton = styled.button`
  color: ${props => (props.primary ? "white" : "palevioletred")};
  background: ${props => (props.primary ? "palevioletred" : "white")};
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const SubmitModal = styled.button`

color: white;
background: palevioletred;
font-size: 20px;
margin: 10px;
padding: 5px 20px;
border: 2px solid palevioletred;
border-radius: 3px;
`

const UploadImageDiv = styled.div`
display: flex;
height: 150px;
justify-content: center;
background: lightpink;
border: solid 2px palevioletred;
border-radius: 5%;
`
const InvisiblePlaceholderUploadImageDiv = styled.div`
display: flex;
height: 150px;
justify-content: center;
background: lightpink;
border: solid 2px palevioletred;
border-radius: 5%;
`
const UploadImage = styled.img`
  object-fit: scale-down;
`;
const TitleAndModalDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const CloseXDiv = styled.div`
  align-self: flex-end;
  position: relative;
  top: -37px;
  left: -20px;
`;

export {
  MainConter,
  HeaderContainer,
  TitleHeader,
  AddBuddy,
  BodyDiv,
  LogoHolder,
  LogoAndTitleHolder,
  StyledModal,
  ModalButton,
  ModalInnerDiv,
  ModalButtonHolder,
  SubmitModal,
  UploadImageDiv,
  UploadImage,
  InvisiblePlaceholderUploadImageDiv,
  TitleAndModalDiv,
  CloseXDiv
};


// opacity: ${(props) => props.opacity};
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
