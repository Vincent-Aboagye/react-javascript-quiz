import React, { Component } from 'react';




// Counter Component
class Counter extends Component {
  render() {
    const { value, onSub, onAdd } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button onClick={onSub} className="button is-danger is-small">-</button>
          <button onClick={onAdd} className="button is-success is-small">+</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data : [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
      ]
    }
    
  }
  onDecrement = (id) => {
    this.setState(previousState => ({
      data: previousState.data.map(prevdata => prevdata.id === id ? {id: prevdata.id, value: prevdata.value--} : prevdata)
    }));
  }

  onIncrement = (id) => {
    this.setState(previousState => ({
      data: previousState.data.map(prevdata => prevdata.id === id ? {id: prevdata.id, value: prevdata.value++} : prevdata)
    }));
  }

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter 
          key={counter.id} value={counter.value}
          onSub={() => this.onDecrement(counter.id)}
          onAdd={() => this.onIncrement(counter.id)} 
             />
        ))}
        <SumTotal getData={this.state.data}/>
      </div>
    );
  }
}

class SumTotal extends Component{
  totalValue = () => this.props.getData.reduce((a, b) => a + b.value, 0)
  render() {
    return (
      <div  className="counter">
        <b>Total Value: {this.totalValue()}</b>
      </div>
    );
  }
}

export default App;
