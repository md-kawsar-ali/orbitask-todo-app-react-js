import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/layouts/Dashboard";
import TodoList from "./features/todos/TodoList";
import MyTasks from "./features/todos/MyTasks";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<TodoList />} />
          <Route path="/my-tasks" element={<MyTasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
