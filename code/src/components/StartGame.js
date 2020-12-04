import React/*,  { useState, useEffect } */ from 'react'
import styled from "styled-components/macro"

import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
//import { Wrapper } from '../lib/Containers'

import { fetchGameData } from '../reducers/thunk'
//import { game } from '../reducers/game'


const ButtonWrapper = styled.div`
  margin: 0 0 30px 0;
`

export const StartGame = () => {
  const username = useSelector(state => state.game.username)
  const dispatch = useDispatch()

  const startBtn = true

  const handleGameStarterClick = () => {
        dispatch(fetchGameData(username)) 
      }
    return (
      
      <ButtonWrapper>
        <Button startBtn={startBtn} onClick={handleGameStarterClick}>Start Game</Button>
      </ButtonWrapper>
  )
}

