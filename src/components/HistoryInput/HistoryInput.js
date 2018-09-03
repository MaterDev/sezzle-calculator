import React, { Component } from 'react';
import './HistoryInput.css'
// import HistoryPrint from '../HistoryPrint/HistoryPrint';

// This component will display the rows for the history entries

class Historyinput extends Component {

    constructor() {
        super();
        // State changes attacked to an interval timer
        // will keep the component refreshing for all users to get live updates
        this.state = {
            intervalId: null
        }
    }

    // Will refresh the client on an interval to get updates.
    componentWillMount() {
        const id = setInterval(this.fetchData, 5000);
        this.setState({intervalId: id});
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <div className="inputBoxDisplay">
            {/* For each entry in the history, will create an individualized card to display on DOM */}
                {this.props.history.map((entry, i) => {
                    return (
                        <div className="card bg-dark mb-2" key={i}>

                            <div className="card-body m-1">
                                <div className="card-header m-0">
                                    <span className="text-muted">{entry.expression.join(' ')}</span>
                                </div>
                                <div className="card-header">
                                    <span className="text-muted"><h5>{entry.theAnswer}</h5></span>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        );
    }
}

export default Historyinput