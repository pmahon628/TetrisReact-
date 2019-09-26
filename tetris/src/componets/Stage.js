import React from 'react';
import { StyledSate, styledStage} from './styles/styledStage';

import Cell from './Cell';

const Stage = ({  stage }) => (
    <styledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key{x} type={cell[0]} />))}
    </styledStage>
)

export default Stage;