import { put, call, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import {
  set_view_todo,
  VIEW_TODO,
  set_add_todo,
  ADD_TODO,
  set_edit_todo,
  EDIT_TODO,
  set_remove_todo,
  REMOVE_TODO,
  // set_list_search,
  // LIST_SEARCH
} from './actions';

const local = "http://localhost:8080";

// 1. api 호출해서 데이터를 가져오고
// 호출이 완료되면 reducer에 데이터를 넣어줌

function* view() {
  const { data } = yield call(axios.get, `${local}/home`);
  yield put(set_view_todo(data));
}

function* insert(bootData) {
  const data = yield call(axios.post, `${local}/insert`, bootData.list);
  const list = yield call(axios.get, `${local}/home`);
  const conData = JSON.parse(data.config.data)
  console.log(conData)
  yield put(set_add_todo(conData));
  yield put(set_view_todo(list.data));
}

function* editData(bootData) {
  const { data } = yield call(axios.post,
    `${local}/${bootData.id}`, null ,
        {
          params: {
            id : bootData.id,
            name : bootData.name,
            description : bootData.description
          }
        }
  );
  const list = yield call(axios.get, `${local}/home`);
  yield put(set_edit_todo(data));
  yield put(set_view_todo(list.data));
}

function* deleteData(bootData) {
  const { data } = yield call(axios.delete, `${local}/${bootData.id}`);
  const list = yield call(axios.get, `${local}/home`);
  yield put(set_remove_todo(data));
  yield put(set_view_todo(list.data));
}

// function* searchList(bootData) {
//   const data = yield call(axios.post, `${local}/search/${bootData.id}`);
//   yield put(set_list_search(data.data));
// }

export default function* rootSaga() {
  yield takeLatest(VIEW_TODO, view);
  yield takeLatest(ADD_TODO, insert);
  yield takeLatest(EDIT_TODO, editData);
  yield takeLatest(REMOVE_TODO, deleteData);
  // yield takeLatest(LIST_SEARCH, searchList);
}
