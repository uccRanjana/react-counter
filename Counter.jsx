import React, { Component } from 'react';
 class Counter extends Component {


    // state = { 
    //     count: this.props.counter.value,
    //  };

    formatCount(){
        //object destructuring
        //count = 0 => Zero, else count
        const {value} =  this.props.counter;
        return value === 0 ? "Zero" : value;
    } 
     
    giveColor(){
        let classes = 'mx-5 h4 font-weight-blod text-';
        const {value} = this.props.counter;
        if(value === 0) classes += 'warning'
        else if(value > 0) classes += 'success'
        else classes += 'danger'
        return classes;
    }


    // handleIncrement = () => {
    //     this.setState({count: this.state.count + 1});
    // }

    // handleDecrement = () => {
    //     this.setState({count: this.state.count - 1});
    // }

    render() { 
    console.log("props:" ,this.props)
    return (
      <>
        <h1>Counter</h1>
        <div className='row'>
          <div className='col-1'>
            <span className={this.giveColor()}>{this.formatCount()}</span>
          </div>
          <div className='col'>
            <button className="btn btn-sm btn-success mx-2" onClick={() => this.props.onIncrement(this.props.counter)} >Increment</button>
            <button className="btn btn-sm btn-danger mx-2" onClick={() => this.props.onDecrement(this.props.counter)}>Decrement</button>
          </div>
        </div>
      </>
    );
}

 
}
 export default Counter;