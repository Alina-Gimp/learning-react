import React, {useState} from 'react';
import './ToDoList.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const tasksForAdding = [...tasks];
        tasksForAdding.push(task);
        setTasks(tasksForAdding);
    }

    const [task, setTask] = useState("");
    const onChangeTask = (event) => {
        setTask(event.target.value);
    }

    const onClickAdd = () => {
        if (!task) return;

        addTask(task);
        reset();
    }
    const reset = () => {
        setTask("");
    }

    return (
        <>
            <h1 className="header">To Do list</h1>
            <div className="windowList">
                <div className="taskList">
                    {
                        tasks.map((task, index) =>
                            (
                                <p className="task">{task}</p>
                            )
                        )
                    }
                </div>
                <input className="inputTask" type="text" value={task} onChange={onChangeTask}
                       placeholder={"New Task"}/>
                <button className="buttonNewTask" onClick={onClickAdd}>Add task</button>
            </div>

        </>
    )
}

export default ToDoList;