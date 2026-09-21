import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    return (
        <section id="center" className="hero text-center mt-5">
            <div className="hero-content">
                <h1>My To-Do List</h1>
                
                <div className="d-flex justify-content-center mb-3">
                    <input 
                        type="text" 
                        className="form-control w-50 me-2" 
                        placeholder="Add a new task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)} 
                    />
                    <button className="btn btn-primary" onClick={addTask}>
                        add a task
                    </button>
                </div>
                <div className="task-list">
                    {tasks.length === 0 ? (
                        <p>no tasks to display</p>
                    ) : (
                        tasks.map((task, index) => (
                            <p key={index} className="alert alert-info w-50 mx-auto">
                                {task}
                            </p>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default ToDoList;