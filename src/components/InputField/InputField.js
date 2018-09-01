import React, { Component } from 'react';

// This component will display the buttons on the dom

class InputField extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (

            // Will display the current expression, which will be calculated when submitted
            <div className="equationInput bg-dark text-light">
                {this.props.expressionData.expression.map((entry, i) => {

                    if (isNaN(entry)) {
                        return <span key={i} className="inputDisplay">{' ' + entry + ' '}</span>
                    } else {
                        return <span key={i} className="inputDisplay">{entry + ' '}</span>
                    }

                })}
            </div>
        );
    }
}

export default InputField