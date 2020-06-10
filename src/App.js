import React from 'react';

const App = () => (<Counter />)

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlPlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handlMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlPlusButton}>+1</button>
        <button onClick={this.handlMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
