import produce from 'immer';
import {
  SET_VIEW_TODO,
  SET_ADD_TODO,
  SET_EDIT_TODO,
  SET_REMOVE_TODO,
  // SET_LIST_SEARCH
} from './actions';

const init =
{
  list: []
}

export default function todoList(state = init, action) {
  return produce(state, draftState => {
    
    switch (action.type) {
      case SET_VIEW_TODO:
        return { ...draftState.list, list: action.list }
        
      case SET_ADD_TODO:
        return draftState.list.concat(action.list)

      case SET_EDIT_TODO:
        return draftState.list.map(todo => {
          if (action.id === todo.id) {
            return {
              id: action.id,
              name: action.name,
              description: action.description
            };
          };
          return todo;
        });

      case SET_REMOVE_TODO:
        draftState.list.filter(todo => action.id !== todo.id);
      // case SET_LIST_SEARCH:
      //   return draftState.filter(todo => action.name === todo.name);
    };
  });
};