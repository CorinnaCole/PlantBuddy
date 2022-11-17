
import React from 'react';
import styled from 'styled-components';

const FormGroup1 = styled.div`
color: palevioletred;
  display: flex;
width: 300px;
`;

const Label = styled.label`
margin-bottom: 0.5em;
color: palevioletred;
  display: block;
`;


const Input = styled.input`
padding: 0.5em;
color: black;
background: lightgrey;
border: none;
border-radius: 3px;
width: 100%;
height: 35px;
font-size: 1em;
margin-bottom: 0.5em;
@media (max-width: 450px) {
  display:flex;
  width: auto;
}
`;

const Message = styled.label`
margin-bottom: 0.5em;
color: palevioletred;
  display: block;
`;

export {
  FormGroup1,
  Label,
  Input,
  Message
}