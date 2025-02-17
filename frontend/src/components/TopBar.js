import React from "react";

export default function TopBar({ onOpenAIHelper }) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="text-lg font-semibold text-gray-800">Dashboard</div>
      <button
        onClick={onOpenAIHelper}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        AI Helper
      </button>
    </div>
  );
}
