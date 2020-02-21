import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Menu from "./components/menu/menu";

import CompaniesIndex from "./components/companies";
import NewCompany from "./components/companies/new";
import EditCompany from "./components/companies/edit";
import ShowCompany from "./components/companies/show";
import NewFounder from "./components/founders/new";
import { SemanticToastContainer } from "react-semantic-toasts";

import { Route, BrowserRouter as Router } from "react-router-dom";

export default () => (
  <Router>
    <Fragment>
      <Menu />
      <Container>
        <SemanticToastContainer />
        <Route exact path="/" component={CompaniesIndex} />
        <Route exact path="/companies" component={CompaniesIndex} />
        <Route exact path="/companies/new" component={NewCompany} />
        <Route path="/companies/edit/:id" component={EditCompany} />
        <Route path="/companies/show/:id" component={ShowCompany} />
        <Route
          path="/companies/:companyId/founders/new"
          component={NewFounder}
        />
      </Container>
    </Fragment>
  </Router>
);
