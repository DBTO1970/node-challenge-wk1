export function rectangle(x, y) {
    console.log(`Solving for rectangle with dimensions ${x}, ${y}`);
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be breater than 0.  Received: ${x}, ${y}`));
    } else {
        setTimeout(() => 
        callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};




