import React from "react";
import TaskCard from "./TaskCard";

export default function KanbanBoard({ tasks }) {
  // Organize tasks by status
  const columns = {
    todo: tasks.filter((t) => t.status === "todo"),
    inProgress: tasks.filter((t) => t.status === "inProgress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.keys(columns).map((status) => (
        <div key={status} className="bg-gray-50 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4 capitalize">
            {status === "todo" ? "To Do" : status === "inProgress" ? "In Progress" : "Done"}
          </h2>
          {columns[status].length > 0 ? (
            columns[status].map((task) => <TaskCard key={task.id} task={task} />)
          ) : (
            <p className="text-gray-500">No tasks here</p>
          )}
        </div>
      ))}
    </div>
  );
}
