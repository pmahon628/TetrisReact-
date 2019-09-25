export const TETROMINOS = { 
    0: { shape [[0]], color: '0,0,0,'},
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
        0: {
            shape: [
                      ['O', 'O']
                      ['O', 'O']
                      ['O', 'O']
                      ['O', 'O']
                  ],  
            color: 'yellow',
        S: {
            shape: [
                      ['O', 'O']
                      ['O', 'O']
                       ['O', 'O']
                      ['O', 'O']
                      ],  
                color: 'orange'
    
        }   
} 