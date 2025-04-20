import React, { useState } from "react";


const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: taskInput }]);
        setTaskInput("");
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };


    return (
        
        <div style={styles.container}>
            <h1 style={styles.header}>Task Tracker</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter a task"
                    style={styles.input}
                />
                <button onClick={addTask} style={styles.addButton}>
                    Add Task
                </button>
            </div>
            <ul style={styles.taskList}>
                {tasks.map((task) => (
                    <li key={task.id} style={styles.taskItem}>
                        <span style={{ textDecoration: "none" }}>{task.text}</span>
                        <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    header: {
        fontSize: "24px",
        marginBottom: "20px",
    },
    inputContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
    },
    input: {
        flex: "1",
        padding: "10px",
        marginRight: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    addButton: {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    taskList: {
        listStyle: "none",
        padding: "0",
    },
    taskItem: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
    },
    deleteButton: {
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        padding: "5px 10px",
    },
};

export default TodoApp;



