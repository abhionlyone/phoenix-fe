import React, { Component } from "react";
import CompanyForm from "./form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";

class NewCompany extends Component {
  submit = data => {
    this.props.addCompany(data);
  };
  render() {
    let company = {};
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
