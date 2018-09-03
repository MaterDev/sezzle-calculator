import React, { Component } from 'react';

// This component will display the buttons on the dom

class InputField extends Component {

    render() {
        return (

            // Will display the current expression, which will be calculated when submitted
            <div className="equationInput bg-dark border rounded border-warning text-light p-1">
                {this.props.expressionData.expression.map((entry, i) => {
                    
                    // Formatting for input display, if the entry is a number it will not have spaces, if it is then it will have spaces.
                    let decimal = '.';
                    // decimal sign will be rendered closer to numbers.
                    if (entry === decimal) {
                        return <span key={i} className="inputDisplay">{entry}</span>
                    }
                    else if (isNaN(entry)) {
                        // operators will be rendered with spaces around them.
                        return <span key={i} className="inputDisplay pl-1 pr-1"> {entry}  </span>
                    } else {
                        return <span key={i} className="inputDisplay">{entry}</span>
                    }

                })}
            </div>
        );
    }
}

export default InputField