import React, { Component } from 'react'
import Lazyload from "./lazyload";
import * as d from "./lazyload";
console.log('----->', d)

export class LazyloadParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: false
        }
    }
    render() {
        console.log('hiii', module);
        return (
            <div>
                <button onClick={() => this.setState({ bool: !this.state.bool })}>Click me</button>
                <Lazyload bool={this.state.bool} />
            </div>
        )
    }
}

export default LazyloadParent;
