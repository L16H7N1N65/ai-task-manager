import axios from "axios";
import { useState } from "react";

export default function TaskGenerator() {
  const [title, setTitle] = useState("");
  const [generatedTask, setGeneratedTask] = useState(null);

  const generateTask = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/ai/generate-task", {
        title,
      });
      setGeneratedTask(response.data);
    } catch (error) {
      console.error("AI Task Generation Error:", error);
    }
  };

  return (
    <div>
      <h2>AI-Powered Task Generator</h2>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={generateTask}>Generate Task</button>

      {generatedTask && (
        <div>
          <h3>{generatedTask.title}</h3>
          <p>{generatedTask.description}</p>
        </div>
      )}
    </div>
  );
}
