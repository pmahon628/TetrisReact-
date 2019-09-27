import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartBtn = ({ callback }) => (
    <StyledStartButton onclick={callback}>Start Game</StyledStartButton>
)

export default StartBtn;