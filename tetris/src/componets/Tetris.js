import React {useState} from 'react';

import {createStage} from '../gameHelpers';

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
   const [droptTime, setDropTime] = useState(null);
   const[gameOver, setGameOver] = useState(false);

   const [player] = usePlayer();
   const [stage, setStage] = useStage(player);

const movePlayer = dir  => {


}

const startGame = () => {
  // reset everything
  setStage(createStage());
}

const drop = () => {
  updatePlayerPos({ x: 0, y=1, collided:false})

}
  
const dropPlayer = () => {
  drop();
}

const move = ({ keyCode}) => {
  if(!gameOver){
   if (e.keyCode  === 37){
      movePlayer(-1);
    } else id (keyCode ===  39){
      movePlayer(1)
    }  else if (keyCode === 40){
      dropPlayer();
    }
  }
}
  
console.log('re-render');
  
return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over"/>
          ):(
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          )}
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
