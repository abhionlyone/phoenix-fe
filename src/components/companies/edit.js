import React, { Component } from "react";
import CompanyForm from "./form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import isEmpty from "lodash/isEmpty";
import { Redirect } from "react-router-dom";
class EditCompany extends Component {
  state = {
    redirect: false,
    company: {}
  };

  submit = data => {
    console.log(data, "Will be submitted");
    let { id } = this.props.match.params;
    this.props.updateCompany(id, data, this.redirect);
  };

  redirect = () => {
    this.setState({ ...this.state, redirect: true });
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchCompany(id);
  }

  componentWillReceiveProps(props) {
    this.setState({ company: props.company });
  }

  render() {
    if (isEmpty(this.state.company)) {
      return <React.Fragment></React.Fragment>;
    }
    let { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`/companies/show/${this.state.company.id}`} />;
    }
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
      fetchCompany: companyActions.fetchCompany,
      updateCompany: companyActions.updateCompany
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
