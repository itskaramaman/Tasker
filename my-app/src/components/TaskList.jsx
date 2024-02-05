import TaskItem from "./TaskItem";
import addCircleOutline from "../assets/add-circle-outline.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const taskItems = [
  {
    id: 1,
    title: "Task one",
    description: "This is task one",
    dueDate: new Date().toDateString(),
  },
  {
    id: 2,
    title: "Task two",
    description: "This is task two",
    dueDate: new Date().toDateString(),
  },
  {
    id: 3,
    title: "Task three",
    description: "This is task three",
    dueDate: new Date().toDateString(),
  },
];

const TaskList = () => {
  const taskList = useSelector((state) => state.task.incompleteTasks);
  return (
    <main>
      <section className="flex justify-between mb-10">
        <h1 className="text-2xl ">Your tasks</h1>
        <Link to="create-task">
          <img className="w-10" src={addCircleOutline} />
        </Link>
      </section>
      <section className="flex gap-10 flex-wrap">
        {taskList.map((item) => (
          <TaskItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};

export default TaskList;
