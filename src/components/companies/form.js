import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  TextArea,
  Segment,
  Header
} from "semantic-ui-react";
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
class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { company: props.company };
  }

  handleChange = (e, data) => {
    let { company } = this.state;
    company[data.name] = data.value;
    this.setState({ ...this.state, company });
  };

  formSubmit = () => {
    let { company } = this.state;
    schema
      .validate(company, { abortEarly: false })
      .then(value => {
        this.props.onSubmit(company);
      })
      .catch(err => {
        console.log(err);
        err.errors.forEach(error => {
          this.renderMessage(err.name, error);
        });
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
    let { title } = this.props;
    return (
      <Segment padded="very" raised>
        <Header as="h2">{title}</Header>
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

export default CompanyForm;
