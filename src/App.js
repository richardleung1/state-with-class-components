import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      inputtedNumber: 0
    }
  }

  increment = () => {
    const newCount = this.state.count + this.state.inputtedNumber
    // this.state = {
    //   count: newCount
    // }

    this.setState({ count: newCount })
  }

  decrement = () => {
    this.setState({ count: this.state.count - this.state.inputtedNumber})
  }

  changeInput = (evt) => {
    const newValue = parseInt(evt.target.value) || 0
    this.setState({inputtedNumber: newValue})
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <input type="number" value={this.state.inputtedNumber} onChange={this.changeInput}/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}


export default App;
