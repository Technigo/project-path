import React from "react"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { gamereducer, nextStep } from "reducers/gamereducer"

const Start = () => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()

  const onUsernameSet = () => {
    dispatch(gamereducer.actions.setUsername(inputValue))
    dispatch(nextStep())
  }

  return (
    <div>
      <p>Welcome to the Maze game</p>
      &nbsp;
      <label>
        Add your username:
        <input
          type='text'
          placeholder='Type your name'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </label>
      &nbsp;
      <button onClick={onUsernameSet}>Start the game</button>
    </div>
  )
}

export default Start
