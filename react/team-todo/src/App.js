import React from "react";
import "antd/dist/antd.css";
import StlyedApp from "./StyledApp";
import Header from "./components/Header";
import Filter from "./components/Filter";
import TodoBody from "./components/TodoBody";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <StlyedApp className="App">
      <Provider store={store}>
        <Header />
        <Filter />
        <TodoBody />
      </Provider>
    </StlyedApp>
  );
}

export default App;
