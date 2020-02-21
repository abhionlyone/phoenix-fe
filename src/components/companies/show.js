import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "../../actions/companiesActions";
import {
  Container,
  Header,
  Segment,
  Grid,
  Button,
  Icon
} from "semantic-ui-react";
import isEmpty from "lodash/isEmpty";
import { format } from "date-fns";
import { Link, Redirect } from "react-router-dom";
import Founders from "../founders";

class ShowCompany extends Component {
  state = {
    redirect: false,
    company: {}
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchCompany(id);
  }

  componentWillReceiveProps(props) {
    this.setState({ company: props.company });
  }

  deleteCompany = () => {
    this.props.deleteCompany(this.state.company.id, this.redirect);
  };

  redirect = () => {
    this.setState({ ...this.state, redirect: true });
  };

  render() {
    if (isEmpty(this.state.company)) {
      return <React.Fragment></React.Fragment>;
    }
    let { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    let {
      company_name,
      description,
      founded_date,
      city,
      state,
      id
    } = this.state.company;
    return (
      <React.Fragment>
        <Segment raised style={{ minHeight: 500 }}>
          <Container text>
            <Header as="h2" textAlign="center">
              {company_name}
            </Header>
          </Container>
          <Segment>
            <Grid divided="horizontally">
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Header as="h4" textAlign="center">
                    {format(founded_date, "MMMM do, yyy")}
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h4" textAlign="center">
                    {city}, {state}
                  </Header>
                  ,
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Link to={`/companies/edit/${id}`}>
                    <Button icon labelPosition="right" color="blue">
                      <Icon name="edit" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    icon
                    labelPosition="right"
                    color="red"
                    onClick={this.deleteCompany}
                  >
                    Delete
                    <Icon name="times rectangle" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ minHeight: 250 }}>
            <p>{description}</p>
          </Segment>
        </Segment>
        <Founders companyId={id}/>
      </React.Fragment>
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
      deleteCompany: companyActions.deleteCompany
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ShowCompany);
