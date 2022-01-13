import React, { useState, useRef, useEffect } from "react";
import WriteDate from "./components/WriteDate";
import FilterBtn from "./components/FilterBtn";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Service from "./components/Service";
import { nanoid } from "nanoid";

export default function App() {
  const listHeadingRef = useRef(null);

  const FILTER_MAP = {
    전체: () => true,
    진행중: task => !task.completed,
    완료: task => task.completed
  };
  
  const [filter, setFilter] = useState('전체');
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map(name => (
    <FilterBtn
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const [tasks, setTasks] = useState([]);
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))


  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
    Service.insert(newTask)
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
    Service.editData(id, newName, false);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => {
      return id !== task.id
    });
    setTasks(remainingTasks);
    Service.deleteData(id)
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  useEffect(() => viewData(), [])

  const promise = Service.view();
  const viewData = () => {
    promise.then((appData) => {
      setTasks(appData.data);
    });
  };

  function stateCheck() {
    const tl = taskList.length;
    for (let i = 0; i < tl; i++) {
      const propTask = taskList[i].props;
      propTask.completed === true
      ? Service.editData(propTask.id, propTask.name, true)
      : Service.editData(propTask.id, propTask.name, false)
    }
    return filter === '전체' && tl !== 0 ? tl + '개의 목록이 있습니다.'
    : filter === '전체' && tl === 0 ? '목록을 추가해주세요.'
    : filter === '진행중' && tl !== 0 ? tl + '개의 일을 진행중 입니다.'
    : filter === '진행중' && tl === 0 ? '현재 진행중인 일이 없습니다.'
    : filter === '완료' && tl !== 0 ? tl + '개의 목록을 완료했습니다!'
    : '현재 완료된 일이 없습니다.'
  }

  function sortTask(e) {
    const tasksArr = [];
    tasks.map(task => {
      tasksArr.push(task);
      return e.target.value === 'upSort' ? tasksArr.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
      : e.target.value === 'downSort' ? tasksArr.sort((a, b) => a.name > b.name ? -1 : a.name > b.name ? 1 : 0)
      : false
    })
    setTasks(tasksArr);
  }

  function searchTasks(ele) {
    const todos = document.querySelectorAll('.todo');
    todos.forEach(e => e.style.display = "none");
    for (let i = 0; i < taskList.length; i++) {
      if ((taskList[i].props.name).includes(ele.target.value)) {
        todos[i].style.display = "block";
      }
    }
  }

  return (
    <div className="todoapp stack-large">
      <WriteDate />
      <input id="searchBar" onKeyUp={searchTasks} placeholder="검색" />
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {stateCheck()}
        <select name="taskSort" onChange={sortTask}>
          <option value="select">== 선택 ==</option>
          <option value="downSort">내림차순</option>
          <option value="upSort">오름차순</option>
        </select>
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}