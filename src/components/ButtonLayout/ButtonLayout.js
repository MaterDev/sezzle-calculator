import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import './ButtonLayout.css';
import InputField from '../InputField/InputField';
import Calculate from '../../Logic/Calculate/Calculate';
import HistoryInput from '../HistoryInput/HistoryInput';
import PostRequest from '../../Logic/Database/POST';
import GetRequest from '../../Logic/Database/GET'



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

            // Every input is transformed into an object tthat will be pushed to history
            InputField: {
                expression: [],
                theAnswer: ``,
            },

            allHistory: [],

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

    // If the length of the history is greater then 10, it will reverse and clip off the end, then reverse back
    historyClip = () => {
        let clippedHistory = this.state.allHistory
        if(clippedHistory.length > 10) {
            clippedHistory.reverse();
            clippedHistory.length  = 10;
            clippedHistory.reverse();
            console.log('clip successful');
            this.setState({
                allHistory: [clippedHistory],
            })
        }
    }

    // Input that will be concatenated
    inputNumberHandler = (input) => {
        console.log('inputNumberHandler working', input);
        this.setState({
            InputField: {
                expression: [...this.state.InputField.expression, input]
            }
        })
    }

    // Input that will have another method
    inputElseHandler = (input) => {

        if (input === '=') {

            let answer = Calculate(this.state.InputField.expression)

            let newHistory = {
                expression: this.state.InputField.expression,
                theAnswer: answer,
            }

            PostRequest(newHistory);
            GetRequest();

        } else if(input === 'C') {
            // Will clear the input field
            this.setState({
                InputField: {
                    expression: [],
                    theAnswer: ``,
                }})
        } else if(input === 'R') {
            // will reset the history
            this.setState({
                allHistory:[],
                })
        }
    }

    render() {
        return (
            <div className="row">

                <div className="col">
                    {/* Input field will display based on user input */}
                    <InputField className="row" expressionData={this.state.InputField} />

                    <div className="ButtonLayoutContainer  row">
                        {/* Buttons */}
                        {this.state.buttonList.map((button, i) => {
                            // i starts at 0
                            return <Buttons key={i} buttonData={button} inputNumber={this.inputNumberHandler} inputElse={this.inputElseHandler} />
                        })}
                    </div>

                </div>



                <div className="col pl-3 pr-3 bg-dark text-muted">
                    <div className="">
                    <h3>History:</h3>
                            {this.state.allHistory.map((entry, i) => {
                                return (<HistoryInput key={i} data={entry} />)
                            })}
                    </div>

                </div>



            </div >
        );
    }
}

export default ButtonLayout;