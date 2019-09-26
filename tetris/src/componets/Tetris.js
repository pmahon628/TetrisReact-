import React from 'react';

import { createStage } from  '../gameHelpers';
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

import Stage from './Stage';
import Display from  './Display';
import StartBtn from './StartBtn';

const Tetris = () => {
return(
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage{ createStage()} />
      <aside>
          <div>
        <Display text="score" />
        <Display text="Rows" />
        <Display text="Level" />
        </div>
        <StartBtn />
      </aside>
      <StyledTetris>
      </StyledTetrisWrapper>
      );
};

export default Tetris;