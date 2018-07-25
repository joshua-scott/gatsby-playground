import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
      <div>
        <h1>A Stateful React Component in Gatsby</h1>
        <p>Its... the same as any other stateful React component :D</p>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}

export default Counter
