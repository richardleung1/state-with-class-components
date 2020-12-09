import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  increment = () => {
    const currentCount = this.state.count
    const newCount = currentCount + 1
    // this.state = {
    //   count: newCount
    // }

    this.setState({ count: newCount })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}


export default App;
