import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DateRange extends Component {
    state = {
        from: null,
        to: null,
    };
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };
    render() {
        const { from, to } = this.state;
        let fromHtml = from? `${from.toDateString()}`:''
        let toHtml = from && to? `${to.toDateString()}`:''
        return (
            <div>
                From: {fromHtml}<br/>
                To: {toHtml}
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}