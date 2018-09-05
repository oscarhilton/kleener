import React, { Component } from "react";
import Page from "layouts/Page";
import LandingHeader from "./LandingHeader";
import PropTypes from "prop-types";

export class Landing extends Component {
  constructor() {
    super();

    this.handleButton = this.handleButton.bind(this);
    this.handleSignInUser = this.handleSignInUser.bind(this);
  }

  componentDidMount() {
    this.props.loadSections();
  }

  handleSignInUser() {
    this.props.signInUser();
  }

  handleButton() {
    const date = new Date();
    this.props.createSection(`Testing testing ${date}`, this.props.user.firstName);
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <Page pageClass="Landing" title="M5 Monitor">
        <div className="Landing__container container">
          <LandingHeader />
          {!user ? (
            <button onClick={this.handleSignInUser} >Sign in</button>
          ) : (<div>
            <ul>
              {this.props.sections.map(section => <li key={section.id} >{section.name}</li>)}
            </ul>
            <button onClick={this.handleButton} >Click me</button></div>)}
        </div>
      </Page>
    );
  }
}

Landing.propTypes = {
  sections: PropTypes.array.isRequired,
  loadSections: PropTypes.func.isRequired,
  createSection: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default Landing;
