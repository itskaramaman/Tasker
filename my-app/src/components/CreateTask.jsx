import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/redux/slices/taskSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ task: { title, description: textArea, dueDate } }));
    navigate("/");
  };

  return (
    <main>
      <h1 className="text-2xl mb-5">Create Task</h1>
      <form
        className="flex flex-col gap-2 border rounded-lg p-10"
        onSubmit={onFormSubmit}
      >
        <input
          className="border p-1 rounded-lg"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill theme="snow" value={textArea} onChange={setTextArea} />
        <input
          className="border p-1 rounded-lg"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="bg-blue-400 hover:bg-blue-500 p-1 rounded-md">
          Create
        </button>
      </form>
    </main>
  );
};

export default CreateTask;
