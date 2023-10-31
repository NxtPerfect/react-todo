export function TaskItem({ id, title, completed, toggleTask, deleteTask }) {
  return (
    <>
      <li>
        <label className="task_label">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTask(id, e.target.checked)}
          />
          <p>{title}</p>
        </label>
        <button className="btn-remove" onClick={() => deleteTask(id)}>
          Remove
        </button>
      </li>
    </>
  );
}
