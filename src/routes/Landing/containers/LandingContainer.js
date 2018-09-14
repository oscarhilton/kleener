import { connect } from "react-redux";
import Landing from "../components";
import * as contentActions from "redux/content/actions";
import * as contentSelectors from "selectors/content";
import * as todoActions from "redux/todo/actions";
import * as todoSelectors from "selectors/todo";
import * as userActions from "redux/user/actions";
import * as userSelectors from "selectors/user";

const mapDispatchToProps = dispatch => ({
  contentGetContent: pageName => dispatch(contentActions.contentGetContent(pageName)),
  createSection: (name, author) => dispatch(todoActions.createSection(name, author)),
  loadSections: () => dispatch(todoActions.loadSections()),
  signInUser: () => dispatch(userActions.signInUser()),
  signOutUser: () => dispatch(userActions.signOutUser()),
  addNewTodo: (id, name) => dispatch(todoActions.addNewTodo(id, name)),
  completeTodo: (sectionId, todoId) => dispatch(todoActions.completeTodo(sectionId, todoId)),
});

const mapStateToProps = state => ({
  homeContent: contentSelectors.contentPageSelectorFactory("home")(state),
  sections: todoSelectors.sectionsSelector(state),
  todos: id => todoSelectors.todosSelector(state, id),
  user: userSelectors.userSelector(state),
});

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Landing),
};
