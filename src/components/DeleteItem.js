import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class DeleteItem extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    this.props.onDelete(e);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="form-container">
        <Form onSubmit={this.onDelete}>
          <FormGroup>
            <Label>User ID</Label>
            <Input type="text" />
          </FormGroup>
          <Button color="danger">Remove User</Button>
        </Form>
      </div>
    );
  }
}

export default DeleteItem;
