import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import './ButtonLayout.css';
import InputField from '../InputField/InputField';
import Calculate from '../../Logic/Calculate/Calculate';
import HistoryInput from '../HistoryInput/HistoryInput';
// import GetRequest from '../../Logic/Database/GET'
import axios from 'axios';

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
            // stores history in a local variable
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

    //  loads initial history data
    componentDidMount() {
        this.getHistory();

    }

    // sends request to mongo
    getHistory = () => {
        axios({
            method: 'get',
            url: '/history',
        }).then((response) => {
            this.setState({
                allHistory: response.data,
            })
        }).catch(function (error) {
            console.log(error);
        });
    }

    //  deletes all history
    resetAll = () => {
        axios({
            method: 'DELETE',
            url: '/history',
        }).then((response) => {
            console.log('delete', response.data);
            this.setState({
                allHistory: [],
            })
        }).catch(function (error) {
            console.log(error);
        });
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
            // calculates and attempts to make a post request to mongo
            Calculate(this.state.InputField.expression);

            // Will clear the input field
            this.setState({
                InputField: {
                    expression: [],
                    theAnswer: ``,
                }
            })

            this.getHistory();
        } else if (input === 'C') {
            // Will clear the input field
            this.setState({
                InputField: {
                    expression: [],
                    theAnswer: ``,
                }
            })
        } else if (input === 'R') {
            this.resetAll();
        }
    }

    render() {
        return (
            <div className="row">

                <span className="mr-4">
                    {/* Input field will display based on user input */}

                    <div className="ButtonLayoutContainer shadow-lg ml-2 mr-2">
                        <InputField expressionData={this.state.InputField} />
                    </div>

                    <div className="ButtonLayoutContainer shadow-lg ml-2 mr-2 p-1 border rounded border-primary row d-flex justify-content-center">
                        {/* Buttons */}
                        {this.state.buttonList.map((button, i) => {
                            // i starts at 0
                            return <Buttons key={i} buttonData={button} inputNumber={this.inputNumberHandler} inputElse={this.inputElseHandler} />
                        })}
                    </div>

                </span>



                <span className="pl-3 pr-3 card border-primary bg-light rounded historyBox">
                    <div className="">
                        <HistoryInput history={this.state.allHistory} getHistory={this.getHistory()} />
                    </div>

                </span>



            </div >
        );
    }
}

export default ButtonLayout;