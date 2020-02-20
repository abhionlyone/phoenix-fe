import React, { Component } from "react";
import CompanyForm from "./form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import _ from 'lodash'
class EditCompany extends Component {
  state = {
    company: {}
  };
  submit = data => {console.log(data, "Will be submitted")};
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchCompany(id);
  }

  componentWillReceiveProps(props){
    this.setState({company: props.company})
  }
  
  render() {
    if(_.isEmpty(this.state.company)){
      return <React.Fragment></React.Fragment>
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
      fetchCompany: companyActions.fetchCompany
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
