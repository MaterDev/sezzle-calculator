import React, { Component } from 'react';
import './Buttons.css';


// This component will display the buttons on the dom

class Buttons extends Component {



    // Sends value to ButtonLayout for concatenation
    isNum = () => {
        this.props.inputNumber(this.props.buttonData.value);
    }
    // Other methods that will be sorted
    isNAN = () => {
        this.props.inputElse(this.props.buttonData.value);
    }

    // Handles the styling for the buttons
    buttonClasses = () => {
        if (this.props.buttonData.value === `+` ||
            this.props.buttonData.value === `-` ||
            this.props.buttonData.value === `*` ||
            this.props.buttonData.value === `/`
        ) {
            return 'btn bg-success';
        } else if (this.props.buttonData.value === `R`) {
            return 'btn bg-danger';
        } else if (this.props.buttonData.value === `C`) {
            return 'btn bg-warning';
        } else if (this.props.buttonData.value === `=`) {
            return 'btn bg-primary';
        } else if (this.props.buttonData.value === `(` ||
                this.props.buttonData.value === `)`) {
            return 'btn bg-dark text-light rounded-circle';
        } else {
            return 'btn bg-secondary';
        }
    }

    render() {
        // Numbers will be concatenated together to create an expression
        if (!(isNaN(this.props.buttonData.value))) {
            return (
                <div>
                    <input type="button" className={`${this.buttonClasses()}`} value={this.props.buttonData.value} onClick={this.isNum} />
                </div>
            );
        }
        // This calculator will concatenate inputs to create the expression
        // Therefore operators, decimals, and parentheses can be treated the same as numbers
        else if (
            this.props.buttonData.value === `+` ||
            this.props.buttonData.value === `-` ||
            this.props.buttonData.value === `/` ||
            this.props.buttonData.value === `*` ||
            this.props.buttonData.value === `.` ||
            this.props.buttonData.value === `(` ||
            this.props.buttonData.value === `)`) {
            return (
                <div>
                    <input type="button" className={`${this.buttonClasses()}`} value={this.props.buttonData.value} onClick={this.isNum} />
                </div>
            );
        }
        // if the input is not a number it will be use to carry out a separate set of methods
        else {
            return (
                <div>
                    <input type="button" className={`${this.buttonClasses()}`} value={this.props.buttonData.value}
                        onClick={this.isNAN} />
                </div>
            );
        }

    }
}

export default Buttons