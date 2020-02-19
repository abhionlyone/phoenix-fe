import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Menu from "./components/menu/menu";

import CompaniesIndex from './components/companies'
import  NewCompany from './components/companies/new'
import EditCompany from './components/companies/edit'

import { Route, BrowserRouter as Router } from "react-router-dom";

export default () => (
  <Router>
    <Fragment>
      <Menu />
      <Container>
        <Route exact path="/" component={CompaniesIndex} />
        <Route exact path="/companies" component={CompaniesIndex} />
        <Route exact path="/companies/new" component={NewCompany} />
        <Route path="/companies/edit/:id" component={EditCompany}/>
      </Container>
    </Fragment>
  </Router>
);
