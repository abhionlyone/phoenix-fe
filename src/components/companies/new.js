import React, { Component } from "react";
import CompanyForm from "./form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import { Redirect } from "react-router-dom";

class NewCompany extends Component {
  state = { redirect: false };

  submit = data => {
    this.props.addCompany(data, this.redirect);
  };

  redirect = () => {
    this.setState({ ...this.state, redirect: true });
  };
  
  render() {
    let company = {};
    let { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <CompanyForm
        onSubmit={this.submit}
        title="Add Company"
        company={company}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCompany: companyActions.addCompany
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(NewCompany);
