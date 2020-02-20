import React, { Component } from "react";
import CompanyForm from "./form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import isEmpty from "lodash/isEmpty"
class EditCompany extends Component {
  state = {
    company: {}
  };
  submit = (data) => {
    console.log(data, "Will be submitted");
    let { id } = this.props.match.params;
    this.props.updateCompany(id, data);
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchCompany(id);
  }

  componentWillReceiveProps(props) {
    this.setState({ company: props.company });
  }

  render() {
    console.log(this.props);
    if (isEmpty(this.state.company)) {
      return <React.Fragment></React.Fragment>;
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
