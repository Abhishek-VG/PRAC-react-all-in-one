import React, { Component } from 'react';
import Lifecycle from './lifecycle'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      score: 0,
      localNum: 0,//ti trigger update which doesnt affects props of lifecycle comp but still renders
    }
    this.initialState = this.state
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <button className="btn btn-primary" onClick={() => this.setState({ display: !this.state.display })}>
            Display Lifecycle
         </button>
          <button className="btn btn-success" onClick={() => this.setState({ score: this.state.score+1 })}>
            Score ++ ({this.state.score})
          </button>
          <button className="btn btn-warning" onClick={() => this.setState({ score: this.state.score })}>
            Send same props
          </button>
          <button className="btn btn-danger" onClick={() => this.setState(this.initialState)}>
            Reset
          </button>
          <button className="btn" onClick={() => this.setState({localNum: this.state.localNum+1})}>
            Local count ++ ({this.state.localNum})
          </button>
        </div>
        {this.state.display && <Lifecycle score={this.state.score} />}
      </div>
    );
  }
}

export default App;
