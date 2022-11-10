/* eslint-disable linebreak-style */
import React from 'react';
import { useState } from 'react';
import { fetchTheGame, game } from 'reducers/store';
import { useDispatch } from 'react-redux';
import { useUID } from 'react-uid';

const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch();
    const uid = useUID(); 

    const test = () => {
        console.log(userName)
        dispatch(game.actions.setUserName(userName))
        dispatch(fetchTheGame())

    }

    return (
        <div>
            <h1> Welcome to the world of Technigo filled with magic of coding. Tell me your name and start and adventure.</h1>
            <input 
            className="userName" 
            name={uid}
            type="text" 
            placeholder="Please write your character name"
            required
            minlength="7" maxlength="10" size="10"
            onChange={(event) => setUserName(event.target.value)}
            value={userName} />
            <button 
            type="submit" 
            onClick={test}> Lets go </button>
       </div>
    )

}
export default StartPage;