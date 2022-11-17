import React, { useState, useEffect } from 'react';
import Modal, { ModalProvider } from "styled-react-modal";
import ImageUploading from "react-images-uploading";
import axios from 'axios';
import PlantModal from './PlantModal.jsx';
import CardHolder from './CardHolder.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import { FaWindowClose, FaFileImage } from 'react-icons/fa';
import {
  MainConter,
  BodyDiv,
  ModalButton,
  ModalInnerDiv,
  ModalButtonHolder,
  StyledModal,
  SubmitModal,
  TitleHeader,
  UploadImageDiv,
  InvisiblePlaceholderUploadImageDiv,
  UploadImage,
  TitleAndModalDiv,
  CloseXDiv,
  WereBusyMessage,
  WereBusyPlaceholder
} from './Styled/styles.jsx';



const App = () => {

  const [allPlants, setAllPlants] = useState([]);
  const [newPlant, setNewPlant] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [hasSelectedUpload, setHasSelectedUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const maxNumber = 3;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, '< imageList and addUpdateIndex>', addUpdateIndex);
    setImages(imageList);
  };

  const handleUploadImage = (event) => {
    setHasSelectedUpload(!hasSelectedUpload);
  }

  const onSubmitButton = (e) => {
    setIsSubmitClicked(true);
    setIsLoading(true);
    setErrorMessage(false);
    postMyPlants(images);
    setImages([]);
  }

  const postMyPlants = (plantImageArray) => { //
    const userId = window.location.pathname.replaceAll('/', '');
    setIsLoading(true);
    axios.post(`/${userId}/plants`, {
      images: plantImageArray,
      firstName: name
    })
      .then(results => {
        getPlants()
          .then(result => {
            setIsLoading(false);
          });
      })
      .catch(err => {
        console.log('here is an error in the post request: ', err);
        setIsLoading(false);
        setErrorMessage(true);
      })
  }

  const handleModal = (e) => {
    setErrorMessage(false);
    setIsSubmitClicked(false);
    setModalOpen(!modalOpen);
  };

  const getPlants = () => {
    const userId = window.location.pathname.replaceAll('/', '');
    return axios.get(`/${userId}/plants`)
      .then(results => {
        setAllPlants(results.data);
        setIsSubmitClicked(false);
        setIsLoading(false);
        setModalOpen(false);
      })
      .catch(err => {
        console.log('here is an error in the post request: ', err)
      })
  }

  useEffect(() => {
    getPlants();

  }, []);


  return (
    <div>
      <Header
        handleModal={handleModal}
      />
      <BodyDiv>

        <ModalProvider>
          <StyledModal
            onEscapeKeydown={handleModal}
            isOpen={modalOpen}
            role="dialog"
            aria-modal={true}
            aria-labelledby="imAPlant"
          >
            <CloseXDiv>
              <FaWindowClose
                onClick={handleModal}
              />
            </CloseXDiv>

            <TitleAndModalDiv>
              {!errorMessage &&
                <WereBusyPlaceholder>
                  Are you sure that's a plant?<br />Maybe try a different picture!
                </WereBusyPlaceholder>
              }
              {errorMessage
                && <WereBusyMessage>
                  Are you sure that's a plant? <br /> Maybe try a different picture!
                </WereBusyMessage>}

              <TitleHeader>
                Name Your Buddy
              </TitleHeader>

              <Form
                setName={setName}
                name={name}
                isSubmitClicked={isSubmitClicked}
              />

            </TitleAndModalDiv>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              resolutionType={'less'}
              dataURLKey="data_url"
              acceptType={["jpg"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
              }) => (
                <ModalInnerDiv>
                  {
                    !imageList.length &&
                    <InvisiblePlaceholderUploadImageDiv>
                      {!isLoading &&
                        <FaFileImage />}
                      {isLoading &&
                        <div className="lds-facebook"><div></div><div></div><div></div></div>}
                    </InvisiblePlaceholderUploadImageDiv>
                  }
                  {imageList.map((image, index) => (
                    <UploadImageDiv
                      key={index}
                      className="image-item">
                      <UploadImage
                        src={image.data_url}
                        alt=""
                        width="100"
                      />
                    </UploadImageDiv>
                  ))}
                  < ModalButtonHolder>
                    <ModalButton
                      onClick={(event)=> {
                        onImageUpload(event);
                        setErrorMessage(false);
                      }}
                    >
                      Upload Image
                    </ModalButton>
                    <ModalButton
                      onClick={onImageRemoveAll}
                    >
                      Remove Image
                    </ModalButton>
                  </ModalButtonHolder>
                  <SubmitModal
                    onClick={onSubmitButton}
                  >
                    Submit
                  </SubmitModal>
                </ModalInnerDiv>
              )}
            </ImageUploading>
          </StyledModal>
        </ModalProvider>

        <CardHolder
          allPlants={allPlants}
        />
      </BodyDiv>

    </div >
  )
}

export default App;
