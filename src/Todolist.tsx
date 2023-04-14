import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (taskId: string) => void
    changeFilter: (value: FilterValueType) => void
    addTasks: (title: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState(' ')

    const addTasks = () => {
        props.addTasks(title)
        setTitle(' ')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLElement>) => {
        if (e.code === 'Enter') {
            addTasks()
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter('all')
    }

    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }

    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler}
            />
            <button onClick={addTasks}>+</button>
        </div>
        <ul>
            {props.tasks.map((tasks) => {

                const onClickHandler = () => props.removeTasks(tasks.id)

                return (
                    <li key={tasks.id}>
                        <input type="checkbox" checked={tasks.isDone}/>
                        <span>{tasks.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
