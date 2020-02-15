import React from "react";
import CompanyList from "./companyList";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => (
  <React.Fragment>
    <CompanyList />
    <div>
      <Link to="/companies/new">
        <Button secondary floated='right'>Add Company</Button>
      </Link>
    </div>
  </React.Fragment>
);
