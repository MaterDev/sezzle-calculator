import math from 'mathjs';

// Using mathjs to evaluate the contents inside the input field

let Calculate = (input) => {
    // First try to run the input
    // If valid, then return the answer back to ButtonLayout
    // If invalid, send alert to client.
    try {
        let Answer = math.eval(input.join(''));
        return Answer

    } catch (error) {
        alert('This is an invalid expression, try again');

    }

}


export default Calculate