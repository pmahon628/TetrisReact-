export const TETROMINOS = { 
    
    0: { shape [[0]], 
        color: '0,0,0,'},
    
    I: {
        shape: [
              [0, 'I', 0, 0]
              [0, 'I', 0, 0]
              [0, 'I', 0, 0]
              [0, 'I', 0, 0]
             ],
        color: 'red',
    },
        J: {
        shape: [
              [0, 'J', 0]
              [0, 'J', 0]
              [0, 'J', 0]
              ['J','J', 0]
             ],
        color: 'blue',  
        
        L: {
            shape: [
                  [0, 'L', 0]
                  [0, 'L', 0]
                  [0, 'L', 0]
                  [0, 'L', 'L']
                 ],
            color: 'green',

        O : {
            shape: [
                      ['O', 'O']
                      ['O', 'O']
                      ['O', 'O']
                      ['O', 'O']
                  ],  
            color: 'yellow',

        S: {
            shape: [
                      ['O', 'S', 'S']
                      ['S',  'S',   'O']
                       [0, 0, 0]
                    ],  
                color: 'orange',

        T: {
             shape: [
                    [0, 0, 0]
                    ['T',  'T', 'T']
                     [0, 'T', 'T']
                            ],  
                    color: 'lawngreen',
        Z: {
                shape: [
                    ['Z', 'Z', 0]
                    [0, 'Z', 'Z']
                    [0,  0, 0]
                    ],  
                 color: 'lightblue'
    
        },   
}; 

export const randomTetromino  = () => {
    const  tetrominos = 'IJLOSTZ';
    const randTetromino =
     tetrominos[Math.floor(math.random() *tetrominos.length)];
     return TETROMINOS[randTetromino];
}