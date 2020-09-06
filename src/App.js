import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      nextId: 1,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let newItems = this.state.items;
    if (e.target[0].value.length !== 0) {
      newItems.push({
        name: e.target[0].value,
        email: e.target[1].value,
        address: e.target[2].value,
        joining_date: e.target[3].value,
        id: this.state.nextId,
      });
      this.setState({
        items: newItems,
        nextId: this.state.nextId + 1,
      });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    const newItems = this.state.items.filter((item) => {
      return item.id != e.target[0].value;
    });
    this.setState({
      items: newItems,
    });
  }

  render() {
    return (
      <div className="App">
        <Header className="child-header" />
        <Main
          className="child-main"
          items={this.state.items}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
