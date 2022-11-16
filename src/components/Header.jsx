import React, {useState, useEffect} from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import {HeaderContainer, TitleHeader, LogoHolder} from './Styled/styles.jsx';
import {FaBars} from 'react-icons/fa';
import axios from 'axios';
// import cactus from '../../images/pinkPot.png';



const Header = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [newPlant, setNewPlant] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const postMyPlants = (plantImageArray) => { //
    axios.post('/plants', {
      'myImages': plantImageArray
    })
    .then(results => {
      console.log(results);
    })
    .catch(err => {
      console.log('here is an error in the post request: ', err)
    })
  }

  const handleModal = (e) => {
    setModalOpen(!modalOpen)
  };

  useEffect(()=> {


  }, []);


    return (
      <HeaderContainer>
        <LogoHolder/>
        <TitleHeader> PlantBuddy </TitleHeader>
      </HeaderContainer>
    )
  }

  export default Header;
