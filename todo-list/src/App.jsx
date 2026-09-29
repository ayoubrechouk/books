import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  // State خاصة بشريط البحث
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.slice(0, 10)); 
      })
      .catch((error) => console.error("Erreur de récupération:", error));
  }, []);

  const handleAdd = () => {
    if (newTask.trim() === "") return; 

    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    
    setTasks([newTaskObj, ...tasks]); 
    setNewTask(""); 
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // تصفية المهام (Filtering) بناءً على شريط البحث
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      <div className="card shadow-sm border-0">
        
        <div className="card-header bg-primary text-white text-center fs-3 fw-bold py-3">
          Todo List
        </div>
        
        <div className="card-body p-4 bg-light">
          
          {/* حقل الإضافة (Ajout) */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter a task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-success px-4 fw-bold" onClick={handleAdd}>
              Add
            </button>
          </div>

          {/* حقل البحث (Search Bar) الإضافي */}
          <div className="mb-4">
            <input
              type="search"
              className="form-control"
              placeholder="🔍 Rechercher une tâche existante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ backgroundColor: "#fdfdfd" }}
            />
          </div>

          {/* عرض المهام المصفاة (filteredTasks) بدل (tasks) */}
          <ul className="list-group border">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between align-items-center py-3"
                >
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input me-3"
                      style={{ transform: "scale(1.2)", cursor: "pointer" }}
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                    />
                    
                    <span
                      style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        color: task.completed ? "#888" : "#000",
                        fontSize: "1.1rem"
                      }}
                    >
                      {task.title}
                    </span>
                  </div>

                  <button
                    className="btn btn-danger btn-sm px-3 fw-bold"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center text-muted py-4">
                Aucune tâche trouvée.
              </li>
            )}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default App;