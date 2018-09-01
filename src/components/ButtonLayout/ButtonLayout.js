import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import './ButtonLayout.css'
import InputField from '../InputField/InputField';

// This component will display the buttons on the dom

class ButtonLayout extends Component {
    // constructor will hold the data used to generate buttons
    constructor(props) {
        super();

        // schema for buttons
        this.state = {
            // stores button information
            button: {
                name: ``,
                value: ``,
            },

            // All the input buttons
            buttonList: [
                { name: `add`, value: `+` },
                { name: `sub`, value: `-` },
                { name: `mult`, value: `*` },
                { name: `divi`, value: `/` },

                { name: `7`, value: `7` },
                { name: `8`, value: `8` },
                { name: `9`, value: `9` },
                { name: `reset`, value: `R` },

                { name: `4`, value: `4` },
                { name: `5`, value: `5` },
                { name: `6`, value: `6` },
                { name: `clear`, value: `C` },

                { name: `1`, value: `1` },
                { name: `2`, value: `2` },
                { name: `3`, value: `3` },
                { name: `=`, value: `=` },

                { name: `0`, value: `0` },
                { name: `decim`, value: `.` },
                { name: `lParen`, value: `(` },
                { name: `rParen`, value: `)` },
            ]
        }

    }

    // Input that will be concatenated
    inputNumberHandler = (input) => {
        console.log('inputNumberHandler working', input);
    }

    // Input that will have another method
    inputElseHandler = (input) => {
        console.log('inputElseHandler Working', input)
    }

  

    render() {
        return (
            <div className="ButtonLayoutContainer row">

                {/* Input field will display based on user input */}
                <InputField />

                {/* Buttons */}
                {this.state.buttonList.map((button, i) => {
                    // i starts at 0
                    return <Buttons key={i} buttonData={button} inputNumber={this.inputNumberHandler}  inputElse={this.inputElseHandler} />
                })}

            </div>
        );
    }
}

export default ButtonLayout;