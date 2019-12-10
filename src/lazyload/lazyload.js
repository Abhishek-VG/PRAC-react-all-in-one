import React, { Component } from 'react'

export class Lazyload extends Component {
    constructor(props){
        super(props);
        this.state = {
            comp: null
        }
    }
    componentWillReceiveProps(nextprops){
        if(nextprops.bool){
            import('./lazyloadHelper')
            .then(component => this.setState({comp: component.default}))
        } else {
            this.setState({comp: null})
        }
    }
  render() {
    const LazyClass = this.state.comp;
    if(!this.state.comp){
        return <h1>FALLBACK</h1>;
    }
    return (
      <div>
        <LazyClass/>
      </div>
    )
  }
}

export default Lazyload
