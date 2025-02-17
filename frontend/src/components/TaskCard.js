import React from "react";

export default function TaskCard({ task }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition duration-300 mb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{task.title}</h3>
      <p className="text-gray-600 text-sm">{task.description}</p>
    </div>
  );
}
