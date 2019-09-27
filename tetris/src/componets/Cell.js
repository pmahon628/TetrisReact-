import React from 'react';
import {styledCell} from './styles/styledCell;
import {TETROMINOS} from '../tetrominos';

const Cell = ({ type }) => (
    <styledCell type={type} color={TETROMINOS[type].color}>cell</styledCell>
)

export default Cell;