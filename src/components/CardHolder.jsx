import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Tilt from "react-parallax-tilt";
// import { AdvancedImage } from '@cloudinary/react';
// import { Cloudinary } from '@cloudinary/url-gen';

const CardHolder = ({allPlants}) => {

  console.log(allPlants);

  return (
    <div>
    {
      allPlants.map((plant, i)=> {
        return (
        <Card plant={plant} key={i}/>
        // <div> {plant.firstName} </div>
        )
      })
    }
    </div>
  )
}
export default CardHolder;