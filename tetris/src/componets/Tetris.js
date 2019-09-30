import React, { useState } from 'react';

import {createStage, checkCollision} from '../gameHelpers';

// styled components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

// custom hooks
import {usePlayer}  from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';

// components
import Stage from './Stage';
import Display from  './Display';
import StartButton from './StartBtn';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();{
  const [stage, setStage] = useStage(player, resetPlayer);

const movePlayer = dir  => {
  if (!checkCollision(player, stage, {x: dir, y: 0}))
    updatePlayerPos({x: dir, y: 0});
 }
}

const startGame = () => {
  // reset everything
  setStage(createStage());
  resetPlayer();
}

const drop = () => {
  updatePlayerPos({ x: 0, y: 1, collided:false})

}
  
const dropPlayer = () => {
  drop();
}

const move = ({ keyCode}) => {
  if(!gameOver){
   if (e.keyCode  === 37){
      movePlayer(-1);
    } else if (keyCode ===  39){
      movePlayer(1);
    }  else if (keyCode === 40){
      dropPlayer();
    }
  }
}
    
return (
  <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
    <StyledTetris>
      <Stage stage={stage} />
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over" />
        ) : (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
        )}
        <StartButton callback={startGame} />
      </aside>
    </StyledTetris>
  </StyledTetrisWrapper>
  );
};

export default Tetris;
