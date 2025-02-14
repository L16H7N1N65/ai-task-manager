import React, { useState } from "react";
import { generateTaskFromAI } from "../services/aiService";

const AITaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateTask = async () => {
    if (!title.trim()) return; 
    setLoading(true);
    const aiTask = await generateTaskFromAI(title);
    setLoading(false);

    if (aiTask) {
      addTask(aiTask);
      setTitle(""); 
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🔮 Generate AI Task</h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task title..."
          className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGenerateTask}
          disabled={loading}
          className={`px-4 py-2 rounded-md text-white font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Generating..." : "Generate Task"}
        </button>
      </div>
    </div>
  );
};

export default AITaskForm;
