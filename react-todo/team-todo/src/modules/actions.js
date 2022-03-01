export const ADD_TODO = "modules/ADD_TODO";
export const EDIT_TODO = "modules/EDIT_TODO";
export const REMOVE_TODO = "modules/REMOVE_TODO";
export const VIEW_TODO = "modules/VIEW_TODO";
export const LIST_SEARCH = "modules/LIST_SEARCH";

export const viewTodo = list => ({
  type: VIEW_TODO,
  list
})

export const addTodo = list => ({
  type: ADD_TODO,
  list
});

export const editTodo = ( id, name, description ) => ({
  type: EDIT_TODO,
  id,
  name,
  description
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const listSearch = list => ({
  type: LIST_SEARCH,
  list
});


