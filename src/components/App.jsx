import React, { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { BodyDiv } from './Styled/styles.jsx';
import axios from 'axios';
import PlantModal from './PlantModal.jsx';
import Header from './Header.jsx';
// import logo from '../../images/logo.jpeg';

const App = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [newPlant, setNewPlant] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const postMyPlants = (plantImageArray) => { //
    const userId = window.location.pathname.replaceAll('/', '');
    axios.post(`/${userId}/plants`, { // add user to route
      images: plantImageArray
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
    console.log('clicked modal', modalOpen);
  };

  useEffect(() => {


  }, []);


  return (
    <div>
      <Header />
      <BodyDiv>
        <button onClick={handleModal}>Add a New Plant</button>

        {modalOpen &&
          <PlantModal
            postMyPlants={postMyPlants}
            handleModal={handleModal}
            isOpen={modalOpen}
          />
        }
      </BodyDiv>

    </div>
  )
}

export default App;
