import React, { Component } from 'react';
import List from "./List"
import GroceryForm from "./GroceryForm"
import './App.css';
import Grocery from './Grocery';

class App extends Component {
  state = {
    groceries: [
      {id: 1, name: "Milk", complete: true},
      {id: 2, name: "Eggs", complete: false},
      {id: 3, name: "Cheese", complete: false},
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
 
  addItem = (name) => {
    const { groceries } = this.state
    const grocery = {name, id: this.getUniqId, complete: false}
    this.setState({ groceries: [...groceries, grocery]})
  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  render() {
    const { groceries } = this.state

    return (
      <div>
      <List name="Grocery List" items={groceries} groceryClick={this.handleClick} />
      <GroceryForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
