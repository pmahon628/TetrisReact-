import {useState,  useEffect} from 'react';
import {createStage} from '../gameHelpers';
import { pipelinePrimaryTopicReference } from '@babel/types';

export const useStage = (player, resetPlayer) => {
    const[stage, setStage] = useState(createStage());

    useEffect(() => ){
        const updateStage = prevState => {
        // first flush the stage
        const newStage = prev.State.map(row=>
            row.map(cell => (cell)[1]  === 'clear' ? [0, 'clear'] : cell)),
            ):
        
            // then draw the  tetromonio
            player.tetromoni.forEach((row,  y) => {
                row.forEach((value , x) => {
                    if(vlaue !==0){
                       newStage[y, + player.pos.y][x + player.pos.x]=[
                           value,
                           `${player.collided ? 'merged'  : 'clear'}`
                       ];
                    }
                });
            });
            return newStage;
        }:

     setStage(prev => updateStage(prev));
     }, [player]);
        return[stage, setStage];
};