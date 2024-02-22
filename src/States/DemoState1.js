import React, { Component } from 'react';

class DemoState1 extends Component {
    constructor()
    {
        super()
        this.state= {id :101, name :"likith"}
        this.state = { location :"vizag"}
        this.state = { count:0}
    }
    change = () =>
    {
        this.setState({location:"HYD"})
    }
    increment = () =>
    {
        this.setState({count : this.state.count +1})
    }
    decrement = () =>
    {
        if(this.state.count >0)
        {
            this.setState({count : this.state.count -1})
        }
    }
    render() {
        return (
            <div>
                <h3><u>STATE OBJECT</u></h3>
                <h3>{this.state.name}</h3>
                <h3>{this.state.id}</h3>
                <h3>{this.state.location}</h3>
                <button onClick={this.change}> Change Location</button>
                <h3> Count : {this.state.count}</h3>
                <button onClick={this.increment}>Increment </button>
                <button onClick={this.decrement}> decrement </button>
            </div>
        );
    }
}

export default DemoState1;
