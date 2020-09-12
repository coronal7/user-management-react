import React, { Component } from "react";
import { Table } from "reactstrap";

class Item extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  render() {
    return (
      <div>
        <Table bordered>
          <tbody>
            <tr>
              <td style={{ width: "6%" }}>{this.props.item.id}</td>
              <td style={{ width: "20%" }}>{this.props.item.name}</td>
              <td style={{ width: "20%" }}>{this.props.item.email}</td>
              <td style={{ width: "34%" }}>{this.props.item.address}</td>
              <td style={{ width: "20%" }}>{this.props.item.joining_date}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Item;
