import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Home
                  items={this.props.items}
                  onDelete={this.props.onDelete}
                  {...props}
                />
              );
            }}
          />
          <Route
            path="/add"
            render={(props) => {
              return <AddItem onAdd={this.props.onAdd} {...props} />;
            }}
          />
          <Route
            path="/delete"
            render={(props) => {
              return <DeleteItem onDelete={this.props.onDelete} {...props} />;
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
