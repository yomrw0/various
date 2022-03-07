export const ADDTODO = "modules/ADDTODO";
export const EDITTODO = "modules/EDITTODO";
export const REMOVETODO = "modules/REMOVETODO";

export const addTodo = ({ id, name, description }) => ({
  type: ADDTODO,
  id,
  name,
  description
});

export const editTodo = ( id, name, description ) => ({
  type: EDITTODO,
  id,
  name,
  description
});

export const removeTodo = id => ({ type: REMOVETODO, id });


