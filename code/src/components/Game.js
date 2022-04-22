import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	ConsoleContent,
	StartButton,
	StartButtonImg,
	GameTextHeader,
	Span,
	LabelName,
	UsernameInput,
	UsernameInputContainer,
} from './Styling'
import game, { fetchGame } from '../reducer/game'
import ui from '../reducer/ui'
import StartBtn from './img/startbtn.png'
import Loadingspinner from './Loadingspinner'

const Game = () => {
	const isLoading = useSelector((store) => store.ui.isLoading)
	const [userName, setUserName] = useState('')

	const dispatch = useDispatch()

	const onInputUserName = (event) => {
		event.preventDefault()
		setUserName(event.target.value)
	}

	const onChangeUserName = () => {
		dispatch(game.actions.setName(userName))
		setUserName('')
		dispatch(fetchGame())
	}

	return (
		<ConsoleContent>
			<UsernameInputContainer>
				{isLoading && <Loadingspinner />}
				<GameTextHeader>
					Welcome to the <Span>- a-maze-ing - </Span> 80's! Try to found your way out of the labyrinth!
				</GameTextHeader>
				<LabelName>Please, enter your name and press start</LabelName>
				<UsernameInput
					type='text'
					value={userName}
					placeholder='Name of player..'
					onChange={onInputUserName}
					onKeyDown={(e) => e.key === 'Enter' && onChangeUserName()}
				/>
				<StartButton onClick={onChangeUserName} disabled={userName.length === 0}>
					<StartButtonImg src={StartBtn} alt='start game'></StartButtonImg>
				</StartButton>
			</UsernameInputContainer>
		</ConsoleContent>
	)
}

export default Game
