import React, { useState } from "react";
import AITaskForm from "../components/AITaskForm";


export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">🚀 AI Task Manager</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* AI Task Form */}
        <div className="mb-8">
          <AITaskForm addTask={addTask} />
        </div>

        {/* Tasks Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-sm">{task.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p>No tasks generated yet. Try creating one! 🎯</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} AI Task Manager. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
