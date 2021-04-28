import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro'

import {generateNextMove} from '../reducers/mazegame'
import LoadingPage from './LoadingPage'
import FinishLayout from "./FinishLayout";

const Container = styled.div`
  padding: 30px 20px 20px 20px;
  background-color: #000;
  width: 100vw;
  height: 100vh;
  margin: 0;
  color: #59e686;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

const InnerContainer = styled.div`
  max-width: 300px;

  @media (min-width: 668px) {
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    max-width: 800px;
  }
 
`

const Text = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    font-size: 18px;
  }
`


const MoveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 668px) {
    flex-direction: row;
  }
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;

  @media (min-width: 668px) {
    flex-direction: row;
  }
`

const TextCenter = styled.p`
  text-align: center;
  padding-top: 15px;
`

const GamePage = () => {
  const gameStatus = useSelector(store => store.mazegame.gameStatus)
  const actions = useSelector(store => store.mazegame.gameStatus.actions)
  const loading = useSelector(store => store.mazegame.loading)
  const userName = useSelector(store => store.mazegame.userName)
  const dispatch = useDispatch()

  console.log('ACTION', actions)
  
  if (loading) {
    return (
      <LoadingPage />
    ) 
  } 

  return(
    <Container>
      <InnerContainer>
        <section class="nes-container">
          <section class="message-list">
            <section class="message -left">
              <div class="nes-balloon from-left">
                <Text>
                  {actions.length === 1 
                    ? 
                      <span>Hello {userName}!</span>
                    : 
                      <span></span> 
                  }
                  <span>{gameStatus.description}</span> 
                </Text>
              </div>
              <i class="nes-bcrikko"></i>
            </section>
          </section>
        </section>
        {actions.length !== 0 
          ? 
            <>
              <TextCenter>ACTIONS YOU CAN TAKE</TextCenter>
              <MoveContainer>
                {actions.map(direction => 
                  <Flexbox key={direction.description}>
                    <div class="nes-container is-rounded is-dark">
                      <div>{direction.description}</div>
                      <button
                        onClick={() => dispatch(generateNextMove(userName, direction.direction))}
                        className="nes-btn is-normal"
                      >{direction.direction}
                      </button>
                    </div>
                  </Flexbox> 
                )}
              </MoveContainer>
            </>
          : 
            <FinishLayout />
      }
      </InnerContainer>
    </Container>
    )
}

export default GamePage

