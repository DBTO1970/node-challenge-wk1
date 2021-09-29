// const rect = require('./rectangle');


import rect from './rectangle.mjs';

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions ${l}, ${w}`);

    rect(l, w, (err, callback) => {
        if (err) {
            console.log(`Error:`, err.message)
        }
    });
    console.log('This statement is logged after the call to rect()');
        
};

solveRect(4, 7);
solveRect(1, -6);
solveRect(2, 28);
solveRect(-3, 10);