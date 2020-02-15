import React, { Component } from "react";
import { Button, Form, Input, TextArea, Segment } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

class NewCompany extends Component {
  state = { company: {} };

  handleChange = (e, data) => {
    let { company } = this.state;
    company[data.name] = data.value;
  };

  formSubmit = () => {
    console.log(this.state, this.state);
  };

  render() {
    let {
      company_name,
      city,
      state,
      description,
      founded_date
    } = this.state.company;
    return (
      <Segment padded='very'>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Company Name"
              placeholder="Company Name"
              onChange={this.handleChange}
              id="companyName"
              name="company_name"
              value={company_name}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="City"
              placeholder="City"
              onChange={this.handleChange}
              id="city"
              name="city"
              value={city}
            />
            <Form.Field
              control={Input}
              label="State"
              placeholder="State"
              onChange={this.handleChange}
              id="state"
              name="state"
              value={state}
            />
            <SemanticDatepicker
              onChange={this.handleChange}
              name="founded_date"
              label="Founded Date"
              id="foundedDate"
              value={founded_date}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Description"
            placeholder="Tell us more about the company..."
            onChange={this.handleChange}
            id="description"
            name="description"
            value={description}
          />
          <Form.Field control={Button} onClick={this.formSubmit}>
            Submit
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default NewCompany;
