import { Input, Button, Typography } from 'antd'
import React, { Component } from 'react'

export default class ListExample extends Component {
    state = {
        name: "abc",
        items: [],
    }

    handleChange = (event) => {
        let v = event.target.value
        this.setState({
            name: v
        })

    }
    handleAdd = () => {

        this.setState({
            items: [this.state.name, ...this.state.items]
        })

    }

    get_color_type = () => {

        if (this.state.items.length > 5) {
            return "success"
        } else if (this.state.items.length > 0) {
            return "warning"
        } else {
            return "danger"
        }
    }

    delete = ( index ) => ( ) => {

        /*  Filter, Map, Find,   */
            this.setState({
                items: this.state.items.filter((item, i)=> index !==  i)
            })
    }


    //  componentDidMount  (rect lifecycle methods class component )
    //  axios with react   

    render() {
        return (
            <div>

                <Typography.Title>{this.state.name}</Typography.Title>
                <Input value={this.state.name} onChange={this.handleChange}></Input>
                <Button onClick={this.handleAdd}> Add to Item </Button>

                <hr />

                <Typography.Title
                    type={this.get_color_type()}
                >
                    Total Items {this.state.items.length}
                </Typography.Title>

                <hr />

                <ul>

                    {
                        this.state.items.map((i)=><li>{i}</li>)
                    }

                </ul>

            </div>
        )
    }
}


