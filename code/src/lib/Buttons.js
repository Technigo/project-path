import React from "react";

import styled from "styled-components/macro";

export const Button = ({title, type, disabled, className, onClick, key, background}) => {

  return (
    <Btn 
      type={type} 
      disabled={disabled} 
      className={className}
      onClick={onClick}
      key={key}
      background={background}
    >
      {title}
    </Btn>
  )
}

const Btn = styled.button`
  color: #00ff7f;
  background-color: transparent;
  font-family: 'Inconsolata', monospace;
  text-transform: uppercase;
  border: 1px solid #00ff7f;
  font-size: 22px;
  padding: 10px 20px;
  transition: 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: 2px solid red;
    border: none;
  }

  &:hover {
    background-color: rgb(0, 255, 127, 0.2); 
  }
`;