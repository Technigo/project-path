import React, { useState } from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'

import labyrinth, { startContent } from '../reducers/labyrinth'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background: #fff;
  margin-bottom: 20px;
  width: 70%;
  padding: 20px;
`;

const CustomButton = styled.button`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background-color: whitesmoke;
  margin: 10px 0 10px 0;
  padding: 10px;
  cursor: pointer;
`;


const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()
  
  const onUserSet = () => {
    dispatch (labyrinth.actions.setName(inputValue))
    dispatch(startContent())
  }

  return (
    <>
      <Container>
        <h1>Welcome!</h1>
        <input 
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <CustomButton
          onClick={onUserSet}
        >
          Start!
        </CustomButton>
      </Container>
    </>
  )
}

export default StartScreen