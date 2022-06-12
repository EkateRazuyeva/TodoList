import React, {useState} from 'react';
import {filterValueType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId:number)=>void
    // changeFilter:(value:filterValueType)=>void
}

export function Todolist(props: PropsType) {

    const [filteredValue, setFilterValue] = useState("All")

    let filteredTasks = props.tasks

    const changeFilter = (value: filterValueType) => {
        setFilterValue(value)
        console.log(value)
    }

    if (filteredValue === "Active") {
        filteredTasks = props.tasks.filter(el => el.isDone === false)
    }

    if (filteredValue === "Completed") {
        filteredTasks = props.tasks.filter(el => el.isDone === true)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTasks.map((el, index) => {
                return (
                    <li key={el.id}>
                        <button onClick={()=>props.removeTask(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=> changeFilter('All')}>All</button>
            <button onClick={()=> changeFilter('Active')}>Active</button>
            <button onClick={()=> changeFilter('Completed')}>Completed</button>
        </div>
    </div>
}
