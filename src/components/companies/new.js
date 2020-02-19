import React, { Component } from "react";
import CompanyForm from "./form";

class NewCompany extends Component {
  submit = (data) => {
    console.log("Data", data)
  }
  render() {
    let company = {}
    return <CompanyForm onSubmit={this.submit} title='Add Company' company={company}/>;
  }
}

export default NewCompany;
