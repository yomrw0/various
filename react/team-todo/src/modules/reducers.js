import { ADD_TODO, EDIT_TODO, REMOVE_TODO, VIEW_TODO, LIST_SEARCH } from "./actions";

const init =
{
  list: []
}

export default function todoList(state = init, action) {
  switch (action.type) {
    case VIEW_TODO:
      return { ...state, list: action.list, }
    case ADD_TODO:
      return { ...state, list: [...state.list, action.list] }
    case EDIT_TODO:
      return {
        list: state.list.map(todo => {
          if (action.id === todo.id) {
            return {
              id: action.id,
              name: action.name,
              description: action.description
            };
          }
          return todo;
        })
      };
    case REMOVE_TODO:
      return {
        list: state.list.filter(todo => action.id !== todo.id)
      };
    case LIST_SEARCH:
      return {
        list: state.list.filter(todo => action.name === todo.name)
      };
    default:
      return state.list;
  }
}
