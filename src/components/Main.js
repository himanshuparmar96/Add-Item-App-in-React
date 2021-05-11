import { Button } from 'antd'
import Title from 'antd/lib/typography/Title'
import React, { Component } from 'react'

export default class Main extends Component {
    state = {
        counter: 0,
    }

    increment = () => {
        let counter = this.state.counter;
        counter++;

        this.setState({
            counter: counter
        });
    }


    decrement = () => {
        let counter = this.state.counter;
        counter--;

        this.setState({
            counter: counter
        });
    }


    render() {
        return (
            <div>
                <Title>Counter: {this.state.counter}</Title>
                <Button onClick={this.increment}> Increment </Button>
                <Button onClick={this.decrement}> Decrement </Button>
            </div>
        )

    }

}
