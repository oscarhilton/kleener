export const sectionsSelector = state => state.todo.get("sections") || [];
export const todosSelector = state => state.todo.getIn(["todos", "list"]) || [];
