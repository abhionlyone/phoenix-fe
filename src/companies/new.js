import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  TextArea,
  Segment,
  Header
} from "semantic-ui-react";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import * as yup from "yup";

let schema = yup.object().shape({
  company_name: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  description: yup.string().required(),
  founded_date: yup.date().required()
});
class NewCompany extends Component {
  state = { company: {} };

  constructor(props) {
    super(props);
  }

  handleChange = (e, data) => {
    let { company } = this.state;
    company[data.name] = data.value;
  };

  formSubmit = () => {
    let { company } = this.state;
    schema
      .validate(company, {abortEarly: false})
      .then(value => {
        console.log("Valid", value);
      })
      .catch(err => {
        console.log(err.errors);
        err.errors.map((error) => {
          this.renderMessage(err.name, error);
        })
      });
  };

  renderMessage = (title, description) => {
    console.log(title, description)
    toast({
      type: 'error',
      icon: 'stop circle',
      title: title,
      description: description,
      animation: 'bounce',
      time: 25000,
      onClose: () => {},
      onClick: () => {},
      onDismiss: () => {}
  });
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
      <Segment padded="very" raised>
        <SemanticToastContainer />
        <Header as='h2'>Add Company</Header>
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
