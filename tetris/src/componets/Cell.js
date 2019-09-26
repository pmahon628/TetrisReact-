import React from 'react';
import {styledCell} from './styles/styledCell;
import {TETROMINOS} from '../tetrominos';

const Cell = ({ type }) => (
    <styledCell type={'L'} color={TETROMINOS['L'].color}>cell</styledCell>
)

export default Cell;