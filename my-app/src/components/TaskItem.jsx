import { markDone } from "../utils/redux/slices/taskSlice";
import { useDispatch } from "react-redux";

const TaskItem = ({ item, taskDone }) => {
  const dispatch = useDispatch();
  const handleMarkDone = () => {
    dispatch(markDone({ task: item }));
  };
  return (
    <div className="border rounded-lg w-3/12 p-2 shadow-md">
      <h1 className="text-lg text-center mb-1 text-blue-500">{item.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
      <hr className="my-1" />
      <div className="flex justify-between text-sm">
        <p className="p-1">{item.dueDate}</p>
        {!taskDone && (
          <button
            onClick={handleMarkDone}
            className="hover:border hover:border-blue-500 rounded-md p-1 hover:text-blue-500"
          >
            Mark as done
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
