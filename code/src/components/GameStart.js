import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game } from '../reducers/game'
import { generateStartMove } from '../reducers/fetch'

export const GameStart = () => {
  const dispatch = useDispatch()
  const [inputValue,  setInputValue] = useState("")

  const username = useSelector((store) => store.game.username);

  const onGameGenerate = () => {
    dispatch(generateStartMove())
  }

  useEffect(() => {
    onGameGenerate()
  }, [username]) 
  
  const uppDateUsername = () => {
    dispatch(game.actions.uppDateUsername(inputValue)) 
  }

  return (
    <section>
     <input
      value={inputValue} 
      onChange={e => setInputValue(e.target.value)}
      placeholder="Write your username"


      />
      <button onClick={uppDateUsername} disabled={inputValue.length < 1}>Start</button>
    </section>
  )
  
}