import React, { Component } from 'react';

class TimerForm extends Component {
    render() {
        return(
        <form>
            <label>
                Time:
                <input type="text" name="time" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default TimerForm;

