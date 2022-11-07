import React, { useState } from 'react';
import './ToDoList.css';
import TaskInput from './TaskInput';
import TasksList from './TasksList';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const tasksForAdding = [...tasks];
    tasksForAdding.push(task);
    setTasks(tasksForAdding);
  };

  return (
    <div className="windowList">
      <h1 className="header">To Do list</h1>

      <TasksList
        tasks={tasks}
      />
      <TaskInput
        addTask={addTask}
      />
    </div>
  );
}

export default ToDoList;
