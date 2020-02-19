import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import {Link} from 'react-router-dom'
class CompanyList extends React.Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  renderCompany = company => {
    return (
      <Segment raised key={company.id}>
        <h1>{company.company_name} <Link to={`/companies/edit/${company.id}`}>more</Link></h1>
        {company.description}
      </Segment>
    );
  };

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        {this.props.companies.map(company => this.renderCompany(company))}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  let { companies } = state;
  return { companies };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCompanies: companyActions.fetchCompanies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
