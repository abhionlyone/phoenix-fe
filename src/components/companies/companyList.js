import React from "react";
import { Segment, Pagination, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import { Link } from "react-router-dom";
import get from "lodash/get";
import * as StringUtil from "../../utils/string";
import LoaderComp from "../loader";

class CompanyList extends React.Component {
  state = {
    loader: true
  }
  componentDidMount() {
    this.props.fetchCompanies(this.toggleLoader);
  }
  
  toggleLoader = () => {
    this.setState({...this.state, loader: !this.state.loader})
  }
  renderCompany = company => {
    return (
      <Segment raised key={company.id}>
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
              <Link to={`/companies/show/${company.id}`}>more...</Link>
            </h4>
          </div>
          <div className="ui grid">
            <div className="sixteen wide column">
              <h5>{StringUtil.truncate(company.description, 500, "...")}</h5>
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
    this.toggleLoader()
    this.props.fetchCompanies(this.toggleLoader, page.activePage);
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
    if(this.state.loader){
      return new Array(10).fill().map(() => <LoaderComp/>);
    }
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
