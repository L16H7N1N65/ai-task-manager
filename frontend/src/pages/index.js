import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import AITaskForm from "../components/AITaskForm";
import KanbanBoard from "../components/KanbanBoard";
import AIHelperModal from "../components/AIHelperModal";
import ProfileSelector from "../components/ProfileSelector";

export default function Home() {
  // State for tasks, profiles, and project
  const [tasks, setTasks] = useState([]);
  const [profiles, setProfiles] = useState([
    { id: "p1", name: "Alice" },
    { id: "p2", name: "Bob" },
  ]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isAIHelperOpen, setAIHelperOpen] = useState(false);
  const [savedProjects, setSavedProjects] = useState([]);

  // Add a new task (default status "todo")
  const addTask = (task) => {
    setTasks([...tasks, { ...task, status: "todo" }]);
  };

  // Profile handlers
  const handleSelectProfile = (profileId) => {
    setSelectedProfile(profileId);
  };

  const handleCreateProfile = (name) => {
    const newProfile = { id: Date.now().toString(), name };
    setProfiles([...profiles, newProfile]);
  };

  // Toggle AI helper modal
  const toggleAIHelper = () => {
    setAIHelperOpen(!isAIHelperOpen);
  };

  // Save project (simulate API call)
  const handleSaveProject = () => {
    const project = {
      id: Date.now().toString(),
      name: "Project " + new Date().toLocaleTimeString(),
      tasks,
      assignedProfile: selectedProfile,
    };
    setSavedProjects([...savedProjects, project]);
    // Clear tasks for new project
    setTasks([]);
    alert("Project saved!");
  };

  // Generate Kanban board from AI response (simulate transformation)
  const handleGenerateKanban = (aiResponse) => {
    // For demonstration, assume aiResponse is plain text with bullet points
    const newTasks = generateKanbanFromAIResponse(aiResponse);
    setTasks(newTasks);
  };

  return (
    <DashboardLayout onOpenAIHelper={toggleAIHelper}>
      <div className="space-y-8">
        {/* Profile Selector */}
        <ProfileSelector
          profiles={profiles}
          onSelectProfile={handleSelectProfile}
          onCreateProfile={handleCreateProfile}
        />

        {/* AI Task Form */}
        <AITaskForm addTask={addTask} />

        {/* Kanban Board */}
        <KanbanBoard tasks={tasks} />

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleSaveProject}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Save Project
          </button>
          <button
            onClick={() =>
              handleGenerateKanban(
                "<ul><li>Point 1: Brief task description.</li><li>Point 2: Another task point.</li><li>Point 3: Yet another point.</li></ul>"
              )
            }
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Generate Kanban
          </button>
        </div>

        {/* Display Saved Projects */}
        <div>
          <h2 className="text-xl font-bold mt-8">Saved Projects</h2>
          {savedProjects.length > 0 ? (
            <ul className="space-y-2">
              {savedProjects.map((proj) => (
                <li key={proj.id} className="p-3 bg-white rounded shadow">
                  <strong>{proj.name}</strong>
                  <p className="text-sm text-gray-600">
                    Tasks: {proj.tasks.length} | Assigned:{" "}
                    {profiles.find((p) => p.id === proj.assignedProfile)?.name ||
                      "None"}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No projects saved yet.</p>
          )}
        </div>
      </div>

      {/* AI Helper Modal */}
      {isAIHelperOpen && <AIHelperModal onClose={toggleAIHelper} />}
    </DashboardLayout>
  );
}

// Helper function to parse AI response into tasks
const generateKanbanFromAIResponse = (aiResponse) => {
  // For simplicity, assume the AI response is an HTML list.
  // In a real implementation, you might use DOMParser or regex.
  const parser = new DOMParser();
  const doc = parser.parseFromString(aiResponse, "text/html");
  const items = Array.from(doc.querySelectorAll("li"));
  const tasks = items.map((li, index) => ({
    id: index + 1,
    title: li.textContent.split(":")[0].trim() || `Task ${index + 1}`,
    description: li.textContent,
    status: "todo",
  }));
  return tasks;
};
