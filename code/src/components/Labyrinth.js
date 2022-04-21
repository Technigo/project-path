import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game, { navigateGame } from '../reducer/game'
import styled from 'styled-components/macro'
import Polygon from './img/Polygon.svg'
import BG2 from './img/bg2.png'
import BG3 from './img/bg1.png'
import BG4 from './img/bg1.png'
import BG5 from './img/bg1.png'
import BG6 from './img/bg1.png'
import BG7 from './img/bg1.png'
import BG8 from './img/bg1.png'
import { keyframes } from 'styled-components'

const Background = styled.div`
	background: url(${(props) => props.background});
	background-size: cover;
	height: 95%;
	width: 95%;
	display: flex;
	border-radius: 6px;
	flex-direction: column;
	justify-content: center;
`

const GameText = styled.p`
	font-size: 16px;
	color: #fff;
	padding: 0 1em;
`

const ButtonController = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);

	background: #fdb100;
	border: solid 2px #000;
	padding: 20px;
	border-radius: 50%;
	place-items: center;
	position: absolute;
	bottom: 0;
	left: auto;
	margin-bottom: 40px;
`

const Btn = styled.button`
	background: #f10db3;
	grid-area: ${(props) => props.position};
	width: 30px;
	height: 30px;
	padding: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 2px #000;
	border-bottom: ${(props) => (props.border === 'North' ? ' solid 2px #F10DB3' : '')};
	border-top: ${(props) => (props.border === 'South' ? ' solid 2px #F10DB3' : '')};
	border-left: ${(props) => (props.border === 'East' ? ' solid 2px #F10DB3' : '')};
	border-right: ${(props) => (props.border === 'West' ? ' solid 2px #F10DB3' : '')};
	animation: ${(props) => props.animation} 1s ease-in-out infinite;

	/* &:disabled {
			background: #C573AF;
		} */
`

const MiddeBtn = styled(Btn)`
	grid-area: 2/2;
	width: 100%;
	height: 100%;
	position: relative;
	border: solid 2px #f10db3;

	&::after {
		content: '';
		width: 30px;
		height: 30px;
		background: #000;
		border-radius: 50%;
		position: absolute;
	}
`

const Modal = styled.div`
	background: #fff;
	display: ${(props) => (props.text !== '' ? 'inline-block' : 'none')};
	position: absolute;
	text-align: center;
	border-radius: 10px;
	padding: 20px;
	width: 300px;
	height: 100px;
	left: 50%;
	top: 10%;
	transform: translate(-50%, 0%);
	z-index: 5;
	transform: all 0.4s ease;
`

const Labyrinth = () => {
	const [select, setSelect] = useState([])
	const [prevStep, setPrevStep] = useState('')
	const dispatch = useDispatch()
	const items = useSelector((store) => store.game.items)

	const onNavigate = (type, direction) => {
		//STORE HISTORY, SELECTED STEPS
		setSelect((prev) => [...prev, direction])
		// STORE LAST STEP
		setPrevStep(direction)
		/////////////////////////////////////
		dispatch(navigateGame(type, direction))

		setTimeout(() => setPrevStep(''), 1500)
	}

	const onRestartClick = () => {
		dispatch(game.actions.restartGame())
	}

	const changeDirectionToIcon = (way) => {
		if (way === 'North') {
			return <img src={Polygon} alt='arrow up' />
		} else if (way === 'South') {
			return <img className='rotate-down' src={Polygon} alt='arrow down' />
		} else if (way === 'East') {
			return <img className='rotate-right' src={Polygon} alt='arrow right' />
		} else if (way === 'West') {
			return <img className='rotate-left' src={Polygon} alt='arrow up' />
		}
	}

	const arrowStyle = (way) => {
		if (way === 'North') {
			return '1/2'
		} else if (way === 'South') {
			return '3/2'
		} else if (way === 'East') {
			return '2/3'
		} else if (way === 'West') {
			return '2/1'
		}
	}

	const btnNavigator = ['North', 'East', 'South', 'West']

	const filterDirection = items.actions.map((item) => item.direction)

	const filterDisableBtn = () => {
		const newOne = btnNavigator.filter((item) => !filterDirection.includes(item))

		return newOne.map((item) => (
			<Btn border={item} position={arrowStyle(item)} disabled>
				{changeDirectionToIcon(item)}
			</Btn>
		))
	}

	const activeBtnAnimation = () => {
		return keyframes`
			50% {
				transform: scale(1.05);
				background-color: #F6C8EA;
				z-index: 3;
			}
			
		`
	}

	const changeBG = () => {
		switch (items.coordinates) {
			case '0,0':
				return BG2
				break
			case '1,0':
				return BG3
				break
			case '1,1':
				return BG4
				break
			case '0,1':
				return BG5
				break
			case '0,2':
				return BG6
				break
			case '0,3':
				return BG7
				break
			case '1,3':
				return BG8
				break
			default:
				return 'red'
		}
	}

	return (
		<Background background={changeBG()}>
			{/* <p>You choose {select}</p> */}

			<Modal text={prevStep}>You chose {prevStep}</Modal>
			{items.actions.map((item) => {
				return (
					<div>
						<GameText>{item.description}</GameText>
					</div>
				)
			})}

			<ButtonController>
				{items.actions.map((item) => {
					return (
						<>
							<Btn
								border={item.direction}
								position={arrowStyle(item.direction)}
								onClick={() => onNavigate(item.type, item.direction)}
								animation={activeBtnAnimation()}
							>
								{changeDirectionToIcon(item.direction)}
							</Btn>
						</>
					)
				})}
				{filterDisableBtn()}
				<MiddeBtn></MiddeBtn>
			</ButtonController>

			<button type='button' onClick={onRestartClick}>
				{!items.actions.length ? 'play again' : 'restart game'}
			</button>
		</Background>
	)
}

export default Labyrinth

/*	<p>You choose {select}</p>
			{items.actions.map((item) => {
				return (
					<div>
						<p>{item.description}</p>
						<button onClick={() => onNavigate(item.type, item.direction)}>{item.direction}</button>
					</div>
				)
			})}
			<button type='button' onClick={onRestartClick}>
				{items.coordinates === '1,3' ? 'play again' : 'restart game'}
			</button> */
/*<Wrapper>
				<div>
					<Square background={items.coordinates === '1,0' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '1,1' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '0,1' ? 'pink' : 'black'}></Square>
				</div>
				<div>
					<Square background={items.coordinates === '0,2' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '0,3' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '1,3' ? 'pink' : 'black'}></Square>
				</div>
				<div>
					<Square></Square>
					<Square></Square>
					<Square></Square>
				</div>
			</Wrapper>
	<Box position={nav}></Box>*/
