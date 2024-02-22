import React, { Component } from 'react';

class Testclass1 extends Component {
    render() {
        return (
            <div>
                <u> PROPS DEMO CLASS AND FUNCTION </u>
                <h3> {this.props.location}</h3>
                <h3> {this.props.name}</h3>
            </div>
        );
    }
}

export default Testclass1;
