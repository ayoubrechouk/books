import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ToDoList from './App.jsx';
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>
)