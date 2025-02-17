import React, { useState } from "react";
import ProjectsSidebar from "./ProjectsSidebar";
import TopBar from "./TopBar";

export default function DashboardLayout({ children, onOpenAIHelper }) {
  // For demo purposes, we'll use dummy projects.
  const [projects, setProjects] = useState([
    { id: 1, name: "Personal Growth" },
    { id: 2, name: "Work Project" },
  ]);

  const handleSelectProject = (project) => {
    console.log("Selected project:", project);
    // Implement project loading logic
  };

  const handleNewProject = () => {
    const newProject = { id: Date.now(), name: "New Project" };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="min-h-screen flex">
      <ProjectsSidebar
        projects={projects}
        onSelectProject={handleSelectProject}
        onNewProject={handleNewProject}
      />
      <div className="flex-1 flex flex-col">
        <TopBar onOpenAIHelper={onOpenAIHelper} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
