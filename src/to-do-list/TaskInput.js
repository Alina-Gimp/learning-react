import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');
  const onChangeTask = (event) => {
    setTask(event.target.value);
  };

  const onClickAdd = () => {
    if (!task) return;

    addTask(task);
    reset();
  };
  const reset = () => {
    setTask('');
  };

  const onKeyDownHandler = (event) => {
    if (event.key !== 'Enter') return;
    if (!task) return;

    addTask(task);
    reset();
  };

  return (
    <div className="buttonInputDiv">
      <div className="input">
        <TextField
          className="inputTask"
          label="New task"
          variant="outlined"
          value={task}
          onChange={onChangeTask}
          placeholder="New Task"
          onKeyDown={onKeyDownHandler}
        />
      </div>
      <div className="button">
        <Button className="buttonNewTask" variant="contained" onClick={onClickAdd}>Add task</Button>
      </div>
    </div>
  );
}

export default TaskInput;
