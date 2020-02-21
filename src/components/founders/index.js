import React from "react";
import { fetchFounders } from "../../actions/founderActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Segment, Header, Grid, Button, Icon } from "semantic-ui-react";
import {Link} from 'react-router-dom'

class Founders extends React.Component {
  state = {
    foundersLoaded: false
  }
  componentDidMount() {
    let { companyId } = this.props;
    this.props.fetchFounders(companyId);
  }

  componentWillReceiveProps(props){
      this.setState({foundersLoaded: true})
  }

  renderFounders() {
    return this.props.foundersData.map(founder => (
      <Header as="h5">
        {founder.name}, {founder.title}
      </Header>
    ));
  }

  render() {
    if (!this.props.foundersData) {
      return <React.Fragment></React.Fragment>;
    }
    return (
      <Segment>
        <Header as="h2">Founders,</Header>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={13}>
              <Segment>{this.renderFounders()}</Segment>
            </Grid.Column>
            <Grid.Column width={3}>
              <Link to={`/companies/${this.props.companyId}/founders/new`}>
                <Button icon labelPosition="right" color="blue">
                  <Icon name="plus square outline" />
                  Add Founder
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  let { foundersData } = state;
  return { foundersData };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchFounders
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Founders);
