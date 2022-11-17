import React, { useState, useEffect } from 'react';
import { HeaderContainer, AddBuddy, LogoAndTitleHolder, TitleHeader, LogoHolder, ModalButton } from './Styled/styles.jsx';
import { FaBars } from 'react-icons/fa';
import axios from 'axios';
// import logo from '../../public/images/pinkPot.png';



const Header = ({ handleModal }) => {



  useEffect(() => {


  }, []);


  return (
    <HeaderContainer>
      <LogoAndTitleHolder>
        <LogoHolder src="images/pinkPot.png" />
        <TitleHeader> PlantBuddy </TitleHeader>
      </LogoAndTitleHolder>
      <AddBuddy onClick={handleModal}>Add a Plant</AddBuddy>
      {/* <ModalButton onClick={handleModal}>Add your buddy!</ModalButton> */}
    </HeaderContainer>
  )
}

export default Header;
