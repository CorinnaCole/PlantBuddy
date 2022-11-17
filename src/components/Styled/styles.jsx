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
background-color: #d1e2d3;
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
  text-align: right;
  cursor: pointer;
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

// justify-content: space-evenly;
const StyledModal = Modal.styled`
  width: 500px;
  height: 50%;
  border-radius: 5%;
  border: solid 10px #104730;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conent: flex-start;
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
// top: -105px;
// left: -8px;

// position: fixed;
// top: 308px;
// left: 764px;
const SubmitModal = styled.button`
color: white;
background: palevioletred;
font-size: 20px;
margin: 10px;
padding: 10px 20px;
border: 2px solid palevioletred;
border-radius: 3px;
`

const UploadImageDiv = styled.div`
display: flex;
height: 150px;
justify-content: center;
background: lightpink;
border: solid 2px palevioletred;
margin: 10px;
border-radius: 5%;
`
const InvisiblePlaceholderUploadImageDiv = styled.div`
display: flex;
height: 150px;
justify-content: center;
background: lightpink;
margin: 10px;
opacity: 0.33;
border: solid 2px palevioletred;
border-radius: 5%;
align-items: center;
.svg {
  font-size: 6em;
}
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
display: flex;
align-self: flex-end;
margin-right: 7px;
  margin-top: 8px;
position: sticky;
top: 0px;
left: 0px;
`;
// align-self: flex-end;
// position: relative;
// top: -37px;
// left: -20px;
const WereBusyMessage = styled.div`
font-family: 'MuseoModerno', cursive;
position: sticky;
font-size: 1.5em;
color: #104730;
text-shadow: 2px 2px #F8C5CD;
text-align: center;
`
const WereBusyPlaceholder = styled.div`
font-family: 'MuseoModerno', cursive;
position: sticky;
font-size: 1.5em;
color: rgba(0,0,0,0);
text-align: center;
`
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
  CloseXDiv,
  WereBusyMessage,
  WereBusyPlaceholder
};
