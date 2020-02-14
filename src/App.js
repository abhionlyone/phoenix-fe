import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Menu from "./menu/menu";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default () => (
  <Router>
    <Fragment>
      <Menu />
      <Container>
        <Route exact path="/" component={Menu} />
      </Container>
    </Fragment>
  </Router>
);
