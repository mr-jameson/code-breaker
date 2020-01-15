import React, { Component } from 'react';

class TimerForm extends Component {
    state = {
        time: ""
    }

    handleChange = (event) => {
        this.setState({ time: event.target.value*60 })
    }

    handleSubmit = async (event) => {
        await alert(`Timer is set for ${this.state.time/60} minutes`);
        event.preventDefault();
        this.props.handleTimerFormSubmit(parseInt(this.state.time))
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label>
                Minutes:
                <input type="text" time={this.state.time} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default TimerForm;

