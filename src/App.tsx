import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';


export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false}
    ])

    function removeTasks(id: string) {
        let filteredTasks = tasks.filter(tasks => tasks.id != id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValueType>('all')

    let taskForTodolist = tasks

    if (filter === 'active') {
        taskForTodolist = tasks.filter(task => task.isDone === false)
    }

    if (filter === 'completed') {
        taskForTodolist = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    function addTasks(title: string) {
        const task = {id: v1(), title: title, isDone: false};
        const newTask = [task, ...tasks]
        setTasks(newTask)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTasks={addTasks}

            />
        </div>
    );
}

export default App;
