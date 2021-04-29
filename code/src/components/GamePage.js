import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { game, generateMove } from "../reducers/game";
import { Loading } from "./Loading";

import styled from "styled-components";
import "nes.css/css/nes.min.css";

export const GamePage = () => {
  const gameUsername = useSelector((store) => store.game.username);
  const gameActions = useSelector((store) => store.game.currentStep.actions);
  const currentStep = useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  const isLoading = useSelector((store) => store.ui.isLoading);

  console.log(isLoading);

  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Main>
          <TopTextsContainer>
            <GameText>{currentStep.description}</GameText>
            <p>Which way will you go {gameUsername}?</p>
          </TopTextsContainer>
          {gameActions.map((action) => (
            <DiscriptionContainer
              key={action.description}
              className="nes-container is-rounded"
            >
              <ButtonContainer>
                <Button
                  className="nes-btn is-primary"
                  onClick={() =>
                    dispatch(generateMove(gameUsername, action.direction))
                  }
                >
                  {action.direction}
              </Button>
              </ButtonContainer>
              <TextInBox className="nes-text">{action.description}</TextInBox>
            </DiscriptionContainer>
          ))}
          <BottomSection>  
            <Button
              disabled={!history.length}
              onClick={() => dispatch(game.actions.setPreviousStep())}
              className="nes-btn is-warning"
            >
              Go back
            </Button>
            <i className="nes-octocat animate"></i>
          </BottomSection>
      </Main>
    );
  }
};

const Main = styled.div`
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #FFC300;
  
  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1200px) {
    height: 900px;
    width: 800px;
  }
`;


const TopTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

const Button = styled.button`
  width: 200px;
  margin: 20px;
`;

const GameText = styled.p`
  font-size: 14px;
`;

const TextInBox = styled.p`
  font-size: 12px;
  color: #00BBFF;
  margin: 10px 0 10px 0;

  @media (min-width: 768px) {
    font-size: 14px;
    margin: 15px;
    padding-bottom: 50px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const DiscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

const BottomSection =styled.div`
  display:flex;
  justify-content: space-between;
  align-item: center;
`;