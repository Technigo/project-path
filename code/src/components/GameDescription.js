import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { continueGame } from '../reducers/game'

const StartDescription = styled.div`
  text-align: center;
  margin-bottom: 30px; 
`
const NextDescription = styled.div`
  text-align: center;
`

const DirectionButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;

`

export const GameDescription = ({inputValue}) => {
  const start = useSelector((store) => store.game.game)
  const dispatch = useDispatch()

  return (
    <>
     <StartDescription>{start.description}</StartDescription>
        {start.actions?.map((direction, index) => {
        return ( 
            <NextDescription key={index}> 
            <div>{direction.description}</div>
            <div>{direction.coordinates}</div>
            <DirectionButton onClick={() => dispatch(continueGame(direction.direction, inputValue))}>{direction.direction}</DirectionButton>
            </NextDescription>
        )
    })}
    </>
  )
}