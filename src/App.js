import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Menu from "./menu/menu";

import CompaniesIndex from './companies'
import  NewCompany from './companies/new'

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default () => (
  <Router>
    <Fragment>
      <Menu />
      <Container>
        <Route exact path="/" component={CompaniesIndex} />
        <Route exact path="/companies" component={CompaniesIndex} />
        <Route exact path="/companies/new" component={NewCompany} />
      </Container>
    </Fragment>
  </Router>
);
