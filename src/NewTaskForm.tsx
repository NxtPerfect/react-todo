import { useState } from "react";

export default function NewTaskForm(props) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask === "") return;

    props.onSubmit(newTask);

    setNewTask("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task_title">New item</label>
        <input
          type="text"
          id="task_title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn_form">Add new task</button>
      </form>
    </>
  );
}
