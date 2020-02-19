import React, { Component } from "react";
import CompanyForm from "./form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
class EditCompany extends Component {
  state = {
    company: {}
  };
  submit = data => {};
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchCompany(id);
  }
  
  render() {
    console.log(this.props.company)
    return (
      <CompanyForm
        onSubmit={this.submit}
        title="Edit Company"
        company={this.props.company}
      />
    );
  }
}

const mapStateToProps = state => {
  let { company } = state;
  return { company };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCompany: companyActions.fetchCompany
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
