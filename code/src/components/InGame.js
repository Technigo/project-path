import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import game, { nextStep } from 'reducers/game'

import Summary from './Summary'
import Loading from './Loading'

const InGameContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: 30px;
  
`
const ActionContainerWrapper = styled.div`
  @media (min-width: 900px) {
    display:flex;
    flex-direction: row;
} 
`

const ActionContainer = styled.div`
  background: radial-gradient(circle, rgba(15,103,72,1) 0%, rgba(5,50,16,1) 100%);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`

const MainContent = styled.div`
  height: 100vh;
  background: black;

  @media (max-width: 332px) {
    font-size: 12px;
  }
`

const Button = styled.button`
    margin-top:5px;
    background-color:#3e883e;
    padding:10px;
    color: white;
    border-radius: 5px;
    border: none;
`

const InGame = () => {
  const direction = useSelector((store) => store.game.direction)
<<<<<<< HEAD
  const actions = useSelector((store) => store.game.direction.actions)
  const usernameFinal = useSelector((store) => store.game.username)
  const history = useSelector((store) => store.game.history)
  const loading = useSelector(store => store.game.loading)
  const dispatch = useDispatch() 
=======
  
>>>>>>> a311775aeadd855e5c94f8f3572c5569e1dbbcdc

  return (
    <InGameContainer>
      {loading && <Loading />}
      {!loading && (
        <MainContent>
          <p>{direction.description}</p>        
          { actions.map((action) => (
            <ActionContainerWrapper>
              <ActionContainer key={action.description}>
                <p>{action.description}</p>
                <Button 
                onClick={() => dispatch(nextStep(usernameFinal, action.direction))}>{action.direction}
                </Button>
              </ActionContainer>
            </ActionContainerWrapper>
            ))            
          }        
          {direction.coordinates === "1,3" && <Summary />}
        </MainContent>
        )}
    </InGameContainer>
  ) 
}

export default InGame