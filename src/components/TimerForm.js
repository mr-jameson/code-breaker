import React, { Component } from 'react';

class TimerForm extends Component {
    constructor(props) {
        this.state = { time: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.time })
    }

    handleSubmit(event) {
        alert(`Timer is set for ${this.state.time} seconds`);
        event.preventDefault();
    }

    render() {
        return(
        <form>
            <label>
                Time:
                <input type="text" time={this.state.time} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default TimerForm;

