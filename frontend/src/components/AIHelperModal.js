import React, { useState } from "react";
import { generateTaskFromAI } from "../services/aiService";

export default function AIHelperModal({ onClose }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const aiResponse = await generateTaskFromAI(input);
    setLoading(false);
    setResult(aiResponse);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg z-10">
        <h2 className="text-2xl font-bold mb-4">AI Helper</h2>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="3"
          placeholder="Ask the AI for help..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </div>
        {result && (
          <div className="mt-4 p-4 bg-gray-50 border rounded">
            <h3 className="font-semibold text-gray-800">AI Response:</h3>
            <p className="text-gray-700 text-sm">{result.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
