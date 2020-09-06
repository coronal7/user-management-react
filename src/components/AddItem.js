import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date().toISOString(),
    };
    this.onAdd = this.onAdd.bind(this);
  }

  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue, // Formatted String, ex: "11/19/2016"
    });
  }

  onAdd(e) {
    this.props.onAdd(e);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="form-container">
        <Form onSubmit={this.onAdd}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label> Joining Date</Label>
            <Input type="date" />
          </FormGroup>
          <Button color="primary">Add User</Button>
        </Form>
      </div>
    );
  }
}

export default AddItem;
