import React, { Component } from "react";
import Item from "./Item";
import { Table } from "reactstrap";
import { Jumbotron } from "reactstrap";

class Home extends Component {
  render() {
    let items = this.props.items.map((item) => {
      return <Item key={item.id} item={item} />;
    });

    return (
      <div>
        <Jumbotron>
          <h4>USER'S TABLE</h4>
        </Jumbotron>
        <Table bordered>
          <thead>
            <tr>
              <th style={{ width: "6%" }}>User ID</th>
              <th style={{ width: "20%" }}>Name</th>
              <th style={{ width: "20%" }}>Email</th>
              <th style={{ width: "34%" }}>Address</th>
              <th style={{ width: "20%" }}>Joining Date</th>
            </tr>
          </thead>
        </Table>
        <div>{items}</div>
      </div>
    );
  }
}

export default Home;
