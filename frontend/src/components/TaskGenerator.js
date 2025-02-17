import axios from "axios";
import { useState } from "react";
import { generateKanbanFromAIResponse } from "../utils/aiHelpers";

export default function TaskGenerator() {
  const [title, setTitle] = useState("");
  const [kanbanTasks, setKanbanTasks] = useState([]);

  const generateTask = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/ai/generate-task", {
        title,
      });
      // Assuming response.data.response contains HTML with <li> elements
      const tasks = generateKanbanFromAIResponse(response.data.response);
      setKanbanTasks(tasks);
    } catch (error) {
      console.error("AI Task Generation Error:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">AI-Powered Task Generator</h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={generateTask}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Generate Task
        </button>
      </div>
      {kanbanTasks.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Generated Tasks (Kanban Format):</h3>
          <ul className="list-disc pl-6 space-y-2">
            {kanbanTasks.map((task) => (
              <li key={task.id}>
                <span className="font-bold">{task.title}:</span> {task.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
