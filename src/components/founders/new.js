import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createFounder } from "../../actions/founderActions";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import * as Toast from "../../utils/toastMessage";
import { Button, Form, Input, Segment, Header } from "semantic-ui-react";

let schema = yup.object().shape({
  name: yup.string().required(),
  title: yup.string().required()
});

class NewFounder extends Component {
  state = { redirect: false, founder: {} };

  redirect = () => {
    this.setState({ ...this.state, redirect: true });
  };

  componentDidMount() {
    let { companyId } = this.props.match.params;
    this.setState({ ...this.state, founder: { company_id: companyId } });
  }

  handleChange = (e, data) => {
    let { founder } = this.state;
    founder[data.name] = data.value;
    this.setState({ ...this.state, founder });
  };

  formSubmit = () => {
    let { founder } = this.state;
    schema
      .validate(founder, { abortEarly: false })
      .then(value => {
        this.props.createFounder(founder, this.redirect);
      })
      .catch(err => {
        err.errors.forEach(error => {
          Toast.errorMessage(err.name, error);
        });
      });
  };

  renderForm() {
    let { redirect } = this.state;
    let { name, title } = this.state.founder;
    return (
      <Segment padded="very" raised>
        <Header as="h2">Add Founder</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Founder Name"
              placeholder="Founder Name"
              onChange={this.handleChange}
              id="founderName"
              name="name"
              value={name}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Founder Title"
              placeholder="Founder Title"
              onChange={this.handleChange}
              id="founderTitle"
              name="title"
              value={title}
            />
          </Form.Group>
          <Form.Field control={Button} onClick={this.formSubmit}>
            Submit
          </Form.Field>
        </Form>
      </Segment>
    );
  }

  render() {
    let { redirect } = this.state;
    let { companyId } = this.props.match.params;
    if (redirect) {
      return <Redirect to={`/companies/show/${companyId}`} />;
    }
    return <React.Fragment>{this.renderForm()}</React.Fragment>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createFounder: createFounder
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(NewFounder);
