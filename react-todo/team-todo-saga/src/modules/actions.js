export const SET_VIEW_TODO = 'SET_VIEW_TODO' 
export const VIEW_TODO = 'VIEW_TODO';
export const SET_ADD_TODO = 'SET_ADD_TODO';
export const ADD_TODO = 'ADD_TODO';
export const SET_EDIT_TODO = 'SET_EDIT_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_REMOVE_TODO = 'SET_REMOVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_LIST_SEARCH = 'SET_LIST_SEARCH';
export const LIST_SEARCH = 'LIST_SEARCH';


export const set_view_todo = list => ({
  type: SET_VIEW_TODO,
  list
});

export const view_todo = () => ({
  type: VIEW_TODO,
});

export const set_add_todo = list => ({
  type: SET_ADD_TODO,
  list
});

export const addTodo = list => ({
  type: ADD_TODO,
  list
});

export const set_edit_todo = () => ({
  type: SET_EDIT_TODO
});

export const edit_todo = ( id, name, description ) => ({
  type: EDIT_TODO,
  id,
  name,
  description
});

export const set_remove_todo = () => ({
  type: SET_REMOVE_TODO
});

export const remove_todo = id => ({
  type: REMOVE_TODO,
  id
});

export const set_list_search = () => ({
  type: LIST_SEARCH,
});

export const list_search = list => ({
  type: SET_LIST_SEARCH,
  list
});