import React, { Component } from "react";
import CompanyForm from "./form";

class EditCompany extends Component {
  submit = (data) => {
    console.log("Data", data)
  }
  render() {
    let {company} = this.state
    return <CompanyForm onSubmit={this.submit} title='Edit Company' company={company}/>;
  }
}

export default EditCompany;
