import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import img from "../assets/start.jpg";

import gameFetch, { firstFetch } from "../reducers/gameFetch";
import Loading from "./Loading";

const StartScreen = () => {
  const [userName, setUserName] = useState("");
  const loading = useSelector((store) => store.gameFetch.loading);

  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(gameFetch.actions.setName(userName));
    dispatch(firstFetch(userName));
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <Content>
            <FormContainer>
              <Label>Welcome! Please enter your name:</Label>
              <form>
                <Input
                  type='text'
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </form>
              <Button onClick={onStartGame}>Start!</Button>
            </FormContainer>
          </Content>
        </Container>
      )}
    </>
  );
};

export default StartScreen;

const Container = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 250px;
  padding: 20px;
  border: 6px double;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f7f5e1;
  border-radius: 15px;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Input = styled.input`
  padding: 5px;
  border: #f7f5e1;
  border-radius: 5px;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  border: #f7f5e1;
  font-size: 16px;
  cursor: pointer;
`;
