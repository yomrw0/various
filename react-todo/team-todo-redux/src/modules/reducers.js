import { ADDTODO, EDITTODO, REMOVETODO } from "./actions";

const init =
  [
    { id: "id_1", name: "1", description: '__1' },
    { id: "id_2", name: "2", description: '__2' },
    { id: "id_3", name: "3", description: '__3' },
    { id: "id_4", name: "4", description: '__4' }
  ]
export default function todoList(state = init, action) {

  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
        }
      ];
    case EDITTODO:
      if (state.id === action.id) {
        return {
          id: action.id,
          name: action.name,
          description: action.description
        }
      }
      return state;
    case REMOVETODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}
