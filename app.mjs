// const rect = require('./rectangle');

import {rectangle as rect} from './rectangle.mjs';

function solveRect(l, w) {
    

    rect();
    console.log('This statement is logged after the call to rect()');
        
};

solveRect(4, 7);
solveRect(1, -6);
solveRect(2, 28);
solveRect(-3, 10);