import React, { Component } from "react";
import Page from "layouts/Page";
import PropTypes from "prop-types";
import { Layout, List, Checkbox, Avatar, Switch, Popover, Menu, Badge } from "antd";
import SimpleInput from "./SimpleInput";
import { browserHistory } from "react-router";

const { Header, Content, Footer, Sider } = Layout;

export class Landing extends Component {
  constructor() {
    super();

    this.handleNewSection = this.handleNewSection.bind(this);
    this.handleSignInUser = this.handleSignInUser.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
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

  handleSectionSelection(id) {
    return () => browserHistory.push(id);
  }

  handleNewTodo(name) {
    const { splat } = this.props.params;
    if (splat.length > 0) {
      this.props.addNewTodo(splat, name);
    }
  }

  handleCompleteTodo(itemId) {
    console.log("TOGGLE");
    this.props.completeTodo(this.props.params.splat, itemId);
  }

  render() {
    const { user } = this.props;
    const { splat } = this.props.params;
    const todosToList = this.props.todos(splat) || [];
    const completedTodos = todosToList.filter(todo => !!todo.completed) || [];
    const uncompletedTodos = todosToList.filter(todo => !todo.completed) || [];

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
            {/* <Button type="primary" onClick={() => {}} shape="circle" size="large" icon="plus" /> */}
          </Header>
          <Layout>
            <Sider theme="light">
              {!!user &&
                this.props.sections.length && (
                  <Menu theme="light" mode="inline" style={{ minHeight: "100vh" }} defaultOpenKeys={["sections"]}>
                    <Menu.SubMenu key="sections" title="Task sections">
                      {this.props.sections.map((section, key) => (
                        <Menu.Item key={key} onClick={this.handleSectionSelection(section.id)}>
                          {section.name}
                          <Badge count={section.todos ? section.todos.filter(todo => !todo.completed).length : 0} />
                        </Menu.Item>
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
                    {splat.length > 0 && (
                      <div>
                        <h3>Add a new task</h3>
                        <SimpleInput placeholder="Write a new task and press enter" handleSubmit={this.handleNewTodo} />
                      </div>
                    )}
                    {splat.length > 0 &&
                      !!this.props.todos && (
                        <div>
                          <h3>Todo</h3>
                          <List
                            size="large"
                            bordered
                            dataSource={uncompletedTodos}
                            renderItem={item => (
                              <List.Item key={item.id}>
                                <List.Item.Meta title={item.name} />
                                <div>
                                  <Checkbox onChange={e => this.handleCompleteTodo(item.id)} />
                                </div>
                              </List.Item>
                            )}
                          />
                          <h3>Completed</h3>
                          <List
                            size="large"
                            bordered
                            dataSource={completedTodos}
                            renderItem={item => (
                              <List.Item key={item.id}>
                                <List.Item.Meta
                                  title={<del>{item.name}</del>}
                                  // description={`Witnessed by ${user.firstName}`}
                                />
                                <div>
                                  <Popover content={<p>Completed by {item.completedBy.name}</p>} trigger="hover">
                                    <Avatar shape="square" src={item.completedBy.photo} />
                                  </Popover>
                                </div>
                              </List.Item>
                            )}
                          />
                        </div>
                      )}
                  </div>
                )}
              </div>
            </Content>
          </Layout>
          <Footer>Made with ❤ by Oscar</Footer>
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
  params: PropTypes.object,
  addNewTodo: PropTypes.func.isRequired,
  todos: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Landing;
