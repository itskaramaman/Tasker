import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import CreateTask from "./components/CreateTask.jsx";
import TaskList from "./components/TaskList.jsx";
import CompletedTasks from "./components/CompletedTasks.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TaskList />,
      },
      {
        path: "/create-task",
        element: <CreateTask />,
      },
      {
        path: "/completed-task",
        element: <CompletedTasks />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
