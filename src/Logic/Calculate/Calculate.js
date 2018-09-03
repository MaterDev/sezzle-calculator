import math from 'mathjs';
import PostRequest from '../../Logic/Database/POST';
import swal from 'sweetalert';

let Calculate = (input) => {

// Error handling will not let an empty array pass.
// An input with only one number and no operator will not pass
// An input that cannot be evaluated will not pass
    if (input.length < 2) {
        swal({
            title: "Not an expression!",
            icon: "error",
            text: "Please enter a complete expression with an operator.",
        });
    } else {
        // Try to run the input
        // If valid, then return the answer back to ButtonLayout
        // If invalid, send alert to client.
        try {
            // Using mathjs to evaluate the contents inside the input field
            let Answer = math.eval(input.join(''));

            let newHistory = {
                expression: input,
                theAnswer: Answer,}
            // Post request sent to mongodb
            PostRequest(newHistory);
        } catch (error) {
            swal({
                title: "Cannot Evaluate!",
                icon: "error",
                text: "Expressions that end with an operator cannot be evaluated.",
            });

        }
    }
}

export default Calculate