import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterValueType = 'All' | 'Active' | 'Completed'

function App() {

    // const tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false},
    //     {id: 4, title: "ReactJS", isDone: false}
    // ]
    let [tasks1, setTask1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS", isDone: false}
    ])


    const removeTask = (taskId: number) => {
        tasks1 = tasks1.filter((el) => el.id !== taskId)
        setTask1(tasks1)
        console.log(taskId)
    }

    // const [filteredValue, setFilterValue] = useState("All")
    //
    // let filteredTasks = tasks1
    //
    // const changeFilter = (value: filterValueType) => {
    //     setFilterValue(value)
    //     console.log(value)
    // }
    //
    // if (filteredValue === "Active") {
    //     filteredTasks = tasks1.filter(el => el.isDone === false)
    // }
    //
    // if (filteredValue === "Completed") {
    //     filteredTasks = tasks1.filter(el => el.isDone === true)
    // }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks1}
                      removeTask={removeTask}
                      // changeFilter={changeFilter}
            />
            {/*<Todolist title="Songs" tasks={tasks2} />*/}
        </div>
    );
}

export default App;
