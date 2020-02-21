import React from "react";
import { Segment, Pagination, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import { Link } from "react-router-dom";
import get from "lodash/get";

class CompanyList extends React.Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  renderCompany = company => {
    return (
      <Segment raised key={company.id}>
        {/* <Link to={`/companies/edit/${company.id}`}>more</Link>
        <h1>
          {company.company_name} | {company.city}, {company.state}
        </h1>
        {company.description} */}
        <div className="ui grid">
          <div className="twelve wide column">
            <div className="ui grid">
              <div className="eight wide column">
                <h1>{company.company_name}</h1>
              </div>
              <div className="eight wide column">
                <h2>
                  {company.city}, {company.state}
                </h2>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <h4>
              <Link to={`/companies/edit/${company.id}`}>more...</Link>
            </h4>
          </div>
          <div className="ui grid">
            <div className="sixteen wide column">
              <h5>{company.description}</h5>
            </div>
          </div>
        </div>
      </Segment>
    );
  };

  renderCompanies = () => {
    if (this.props.companiesData) {
      return this.props.companiesData.companies.map(company =>
        this.renderCompany(company)
      );
    }
  };

  onPageChange = (e, page) => {
    this.props.fetchCompanies(page.activePage);
  };

  renderPagination = () => {
    if (this.props.companiesData) {
      let { pagination } = this.props.companiesData;
      let pageCount = get(pagination, "pages", 0);
      let currentPage = get(pagination, "page", 0);
      return (
        <Pagination
          activePage={currentPage}
          onPageChange={this.onPageChange}
          totalPages={pageCount}
          ellipsisItem={null}
        />
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.renderCompanies()}
        {this.renderPagination()}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  let { companiesData } = state;
  return { companiesData };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCompanies: companyActions.fetchCompanies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
