export const sectionsSelector = state => state.todo.get("sections") || [];
export const todosSelector = (state, id) =>
  state.todo
    .get("sections")
    .filter(section => section.id === id)
    .map(selected => selected.todos)[0];
