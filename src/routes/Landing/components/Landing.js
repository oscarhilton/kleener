import React, { Component } from "react";
import Page from "layouts/Page";
import PropTypes from "prop-types";
import { Layout, Button, List, Checkbox, Avatar, Dropdown, Icon, Switch, Popover, Menu, Input, Form } from "antd";
import SimpleInput from "./SimpleInput";

const { Header, Content, Footer, Sider } = Layout;

export class Landing extends Component {
  constructor() {
    super();

    this.handleNewSection = this.handleNewSection.bind(this);
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

  handleNewSection(title) {
    this.props.createSection(title, this.props.user.firstName);
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <Page pageClass="Landing" title="M5 Monitor">
        <Layout>
          <Header>
            <Switch
              checkedChildren="logout"
              unCheckedChildren="login"
              onChange={this.handleSignInUser}
              defaultChecked={!!user}
            />
          </Header>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider theme="light">
              {!!user &&
                this.props.sections.length && (
                  <Menu theme="light" mode="inline">
                    <Menu.SubMenu title="Task sections">
                      {this.props.sections.map(section => (
                        <Menu.Item key={section.id}>{section.name}</Menu.Item>
                      ))}
                      <SimpleInput placeholder="Add new section" handleSubmit={this.handleNewSection} />
                    </Menu.SubMenu>
                    <Menu.SubMenu title="Users" />
                  </Menu>
                )}
            </Sider>
            <Content>
              <div className="container" style={{ background: "white", padding: "30px" }}>
                {!user ? (
                  <div>You are signed out of your account</div>
                ) : (
                  <div>
                    <Button type="primary" onClick={() => {}} shape="circle" size="large" icon="plus" />
                    {this.props.sections.length && (
                      <List
                        size="large"
                        bordered
                        dataSource={this.props.sections}
                        renderItem={item => (
                          <List.Item key={item.id}>
                            <List.Item.Meta title={item.name} description={`Witnessed by ${user.firstName}`} />
                            <div>
                              <Popover content={<p>Completed by {user.firstName}</p>} trigger="hover">
                                <Avatar shape="square" src={user.picture} />
                              </Popover>
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
          <Footer>footer</Footer>
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
