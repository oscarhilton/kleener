import React, { Component } from "react";
import Page from "layouts/Page";
import PropTypes from "prop-types";
import { Layout, Button, List, Checkbox, Avatar, Dropdown, Icon, Switch } from "antd";

const { Header, Content, Menu, Footer, Sider } = Layout;

export class Landing extends Component {
  constructor() {
    super();

    this.handleButton = this.handleButton.bind(this);
    this.handleSignInUser = this.handleSignInUser.bind(this);
  }

  componentDidMount() {
    this.props.loadSections();
  }

  handleSignInUser(isLogin) {
    if (isLogin) {
      this.props.signInUser();
    } else {
      this.props.signOutUser();
    }
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
        <Layout>
          <Header>
            <Switch checkedChildren="logout" unCheckedChildren="login" onChange={this.handleSignInUser} />
          </Header>
          <Content className="container">
            <div style={{ background: "white", margin: "10px" }}>
              {!user ? (
                <div>You are signed out of your account</div>
              ) : (
                <div>
                  <Button type="primary" onClick={this.handleButton} shape="circle" size="large" icon="plus" />
                  {this.props.sections.length && (
                    <List
                      size="large"
                      bordered
                      dataSource={this.props.sections}
                      renderItem={item => (
                        <List.Item key={item.id}>
                          <List.Item.Meta title={item.name} description={`Witnessed by ${user.firstName}`} />
                          <div>
                            <Avatar shape="square" src={user.picture} />
                            <Checkbox onChange={() => {}} />
                          </div>
                        </List.Item>
                      )}
                    />
                  )}
                </div>
              )}
            </div>
          </Content>
        </Layout>
      </Page>
    );
  }
}

Landing.propTypes = {
  sections: PropTypes.array.isRequired,
  loadSections: PropTypes.func.isRequired,
  createSection: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  signOutUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default Landing;
