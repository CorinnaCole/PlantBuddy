import React, { useState, useEffect } from 'react';
import {FormGroup1, Label, Input, Message } from './Styled/form.styled.jsx';


const Form = ({setName, isSubmitClicked, name}) => {


  const handleName = (event) => {
    setName(event.target.value);
  };

  useEffect(()=> {
    setName('');
  }, [isSubmitClicked]);

  return (

    <FormGroup1>
      <Input
        onChange={handleName}
        id="label"
        value={name}
      />
    </FormGroup1>

  )
}
export default Form;