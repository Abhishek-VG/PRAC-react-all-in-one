import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { redColor: true }
    console.log("constructor props ---> ", props)
  }
  componentWillMount() {
    console.log('componentWillMount ---> no arguments')
  }
  componentDidMount() {
    console.log('componentDidMount ---> no arguments')
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps ---> nextProps = ', nextProps, ' prevState = ', prevState);
    // return nextProps
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ---> ', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate ---> nextProps = ', nextProps,' nextState = ' , nextState)
    // if((nextState === this.state) && (nextProps === this.props)) {
    //   return false;
    // }
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate ---> nextProps = ', nextProps,' nextState = ' , nextState)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate ---> prevProps = ', prevProps, ' prevState = ', prevState)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount ---> no arguments')
  }
  render() {
    console.log('*****Render*****')
    const color = this.state.redColor ? 'danger' : 'info';
    return (
      <div className="well well-lg  text-center">
        <button className={`btn btn-${color}`} onClick={() => this.setState({ redColor: !this.state.redColor })}>
          Update lifecycle component
        </button>
      </div>
    );
  }
}

export default Lifecycle;
