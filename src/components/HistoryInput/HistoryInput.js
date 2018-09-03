import React, { Component } from 'react';

// This component will display the rows for the history entries

class Historyinput extends Component {

    render() {
        return (
            <div className="bg-dark text-light mt-1">
                <div className="">
                    {this.props.data.expression.map((entry, i) => {
                        console.log();

                        // Formatting for input display, if the entry is a number it will not have spaces, if it is then it will have spaces.

                        // To evaluate the decimal the conditional statement uses the unicode value for comparison
                        let decimal = '.';

                        if (entry === decimal) {
                            return <span key={i}>{entry}</span>
                        }
                        else if (isNaN(entry)) {
                            return <span key={i}> {entry} </span>
                        } else {
                            return <span key={i}>{entry}</span>
                        }

                    })} = {this.props.data.theAnswer}

                </div>

            </div>
        );

    }
}

export default Historyinput