/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/game';

export const StartingPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(game.actions.addPlayer(username))
    dispatch(startGame())
  }
  return (
    <section>
      <div>
        <div>
          <p>Do you dare to enter the labyrinth cave?</p>
          <p>Pay attention or you be lost forever</p>
          <p>Enter your name and start your journey into the unknown</p>
        </div>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="usernameInput">
            <input
              id="usernameInput"
              type="text"
              placeholder="Enter your username"
              onChange={(event) => setUsername(event.target.value)}
              required />
          </label>
          <button type="submit">Next</button>
        </form>
      </div>
    </section>
  )
}