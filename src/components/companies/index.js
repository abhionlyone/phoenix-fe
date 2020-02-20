import React from "react";
import CompanyList from "./companyList";
import { Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => (
  <React.Fragment>
    <CompanyList />
    <div className="ui vertically padded grid docs-example">
      <div className="row">
        <div
          className="sixteen wide column rendered-example elements-button-types-button-example-emphasis-shorthand"
        >
          <div>
          <Link to="/companies/new">
            <Button secondary floated="right">
              Add Company
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
