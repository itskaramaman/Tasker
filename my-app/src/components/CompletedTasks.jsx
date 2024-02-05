import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const CompletedTasks = () => {
  const completedtaskList = useSelector((state) => state.task.completedTasks);
  return (
    <main>
      <h1 className="text-2xl mb-10">Your Previous Completed Tasks</h1>
      <section className="flex gap-10">
        {completedtaskList.map((item) => (
          <TaskItem key={item.id} item={item} taskDone={true} />
        ))}
      </section>
    </main>
  );
};

export default CompletedTasks;
