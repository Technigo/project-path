import React, { useState } from 'react';

import labyrinth, { generateGame } from '../reducers/labyrinth';
import { useDispatch } from 'react-redux';

import { CardContainer, Title, TitleBar, Content, CoverImage } from './Styles';

const StartPage  = () => {
    const [player, setPlayer] = useState('');

    const dispatch = useDispatch();

    const onPlayerSet = () => {
        // dispatch(labyrinth.actions.setAuthor(inputValue));
        // dispatch(generateQuote());
        dispatch(labyrinth.actions.setPlayer(player));
        dispatch(generateGame());
    }

    return (
        <CardContainer>
            <CoverImage src={'https://images.unsplash.com/photo-1606298855672-3efb63017be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}/>
            <Content>
                <TitleBar>
                    <Title>Welcome to Labyrinth! Please enter your name: </Title>
                </TitleBar>
            
                <input
                type='text'
                value={player}
                onChange={event => setPlayer(event.target.value)}
                />
            
                <button onClick={onPlayerSet}>Let's begin!</button>
            </Content>
        </CardContainer>
    )
}

export default StartPage;