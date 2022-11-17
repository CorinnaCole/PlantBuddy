import React, { useState, useEffect } from 'react';
// import { AdvancedImage } from '@cloudinary/react';
// import { Cloudinary } from '@cloudinary/url-gen';
import Compressor from 'compressorjs';
import ImageUploading from "react-images-uploading";
import { StyledModal } from './Styled/styles.jsx';
import FocusLock from "react-focus-lock";

const PlantModal = ({ postMyPlants, handleModal, modalOpen }) => {

  const [images, setImages] = useState([]);

  const maxNumber = 3;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, '< imageList and addUpdateIndex>', addUpdateIndex);
    setImages(imageList);
  };

  //on file submit, should send images for posting, clear image array and close modal
  const onSubmitButton = (e) => {
    postMyPlants(images);
    setImages([]);
    handleModal();
  }


  useEffect(() => {
  }, []);


  // isOpen={isOpen}
  // onEscapeKeydown={toggleModal}
  // role="dialog"
  // aria-modal={true}
  // aria-labelledby="modal-label"

  return (

      // <FocusLock>
        <StyledModal
          // onEscapeKeydown={handleModal}
          isOpen={modalOpen}
          role="dialog"
          aria-modal={true}
          aria-labelledby="imAPlant"
        >
          <p id={'imAPlant'}>I'm a plant</p>
          {/* <ImageUploading
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
              isDragging,
              dragProps
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>

                {imageList.map((image, index) => (
                  <div key={index} className="image-item">

                    <img src={image.data_url} alt="" width="100" />

                    <div className="image-item__btn-wrapper">
                      {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                      {/* <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>

                  </div>
                ))}
                <button onClick={onSubmitButton}> Submit </button>
              </div>

            )}
          </ImageUploading>  */}

        </StyledModal>
      // {/* </FocusLock> */}


  )
}

export default PlantModal;
