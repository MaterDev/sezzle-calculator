import React, { Component } from 'react';

// This component will display the buttons on the dom

class InputField extends Component {

    render() {
        return (

            // Will display the current expression, which will be calculated when submitted
            <div className="equationInput bg-dark text-light">
                {this.props.expressionData.expression.map((entry, i) => {

                    // Formatting for input display, if the entry is a number it will not have spaces, if it is then it will have spaces.
                    if (isNaN(entry)) {
                        return <span key={i} className="inputDisplay">{' ' + entry + ' '}</span>
                    } else {
                        return <span key={i} className="inputDisplay">{entry}</span>
                    }

                })}
            </div>
        );
    }
}

export default InputField