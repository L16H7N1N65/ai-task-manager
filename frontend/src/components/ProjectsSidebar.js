import React from "react";

export default function ProjectsSidebar({ projects, onSelectProject, onNewProject }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="text-xl font-bold mb-4">Projects</div>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelectProject(project)}
              className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onNewProject}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        + New Project
      </button>
    </aside>
  );
}
