import { TaskItem } from "./TaskItem.tsx";

export function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <>
      <ul className="list">
        {tasks.length === 0 && "No items"}
        {tasks.map((task) => {
          return (
            <TaskItem
              {...task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              key={task.id}
            />
          );
        })}
      </ul>
    </>
  );
}
