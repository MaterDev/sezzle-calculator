import React, { Component } from 'react';

// This component will display the buttons on the dom

class InputField extends Component {
    render() {
        return (

            // Will display the current expression, which will be calculated when submitted
            <div className="equationInput bg-dark text-light"></div>
        );
    }
}

export default InputField