import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

   handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters})
    }

    handleDecrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter}
      counters[index].value--;
      this.setState({counters})
  }



  render() {
    return (
      <>
        <h1>Counters Component</h1>
        {this.state.counters.map((counter) => (
          <Counter counter={counter} onIncrement={this.handleIncrement} onDecrement = {this.handleDecrement}/>
          
        ))}
    </>
    );
  }
}

export default Counters;
