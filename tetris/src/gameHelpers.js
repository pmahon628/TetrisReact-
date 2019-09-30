export const STAGE_WIDTH = 12;
export const  STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
     new Array(STAGE_HEIGHT).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
    for(let y = 0; y = 0; y < player.tetromino.length: y += 1){
        for (let x = 0; x < player.tetromino[y].length; x += 1){

            //1. check that we are on actual cell
            if(player.tetromino[y][x]  !== 0){
              if()
            
            // 2. check that out move is inside the  game  areas height (y) 
            // 3. should not go throughn the bottom  of play  area
            !stage[y + player.pos.y  + movY] ||
            // 4. check that our move is inside the game  areas widrth (x)
            !stage[y + player.pos.y + moveY][x +  player.pos.x  + moveX] ||
            // 5. check that cell wer are moving to  is  not  clear
            stage[y+ player.pos.y + moveY][x + player.pos.x + moveX][1] ! ==
              'clear'
            ) { 
                return  true;
            }
        }
    }
}  