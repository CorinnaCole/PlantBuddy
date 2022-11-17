import React, { useState, useEffect } from 'react';
import {FormGroup1, Label, Input, Message } from './Styled/form.styled.jsx';


const Form = ({setName}) => {

  const handleName = (event) => {
    setName(event.target.value);
  };

  return (

    <FormGroup1>
      <Input onChange={handleName} id="label" />
    </FormGroup1>

  )
}
export default Form;