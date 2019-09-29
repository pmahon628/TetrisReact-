import {useState,  useEffect} from 'react';
import {createStage} from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const[stage, setStage] = useState(createStage());

    useEffect(() => ){
        const updateStage = prevState => {
        // first flush the stage
        const newStage = prev.State.map(row=>
            row.map(cell => (cell)[1]))
            )
        
        }

        setStage(prev => updateStage(prev))

    },  [])

    return[stage, setStage];
}