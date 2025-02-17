import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import KanbanBoard from "../../components/KanbanBoard";
import AIHelperModal from "../../components/AIHelperModal";
import ProfileSelector from "../../components/ProfileSelector";

export default function Dashboard() {
  // Sample state for tasks, profiles, etc.
  const [tasks, setTasks] = useState([
    { id: 1, title: "Setup Repo", description: "Initialize repository on GitHub", status: "todo" },
    { id: 2, title: "Design Mockups", description: "Create UI wireframes", status: "inProgress" },
    { id: 3, title: "Deploy App", description: "Deploy to production server", status: "done" },
  ]);

  const [profiles, setProfiles] = useState([
    { id: "p1", name: "Alice" },
    { id: "p2", name: "Bob" },
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isAIHelperOpen, setAIHelperOpen] = useState(false);

  const handleSelectProfile = (profileId) => {
    setSelectedProfile(profileId);
  };

  const handleCreateProfile = (name) => {
    const newProfile = { id: Date.now().toString(), name };
    setProfiles([...profiles, newProfile]);
  };

  const toggleAIHelper = () => {
    setAIHelperOpen(!isAIHelperOpen);
  };

  return (
    <DashboardLayout onOpenAIHelper={toggleAIHelper}>
      <div className="space-y-6">
        {/* Profile Selector */}
        <ProfileSelector
          profiles={profiles}
          onSelectProfile={handleSelectProfile}
          onCreateProfile={handleCreateProfile}
        />

        {/* Kanban Board */}
        <KanbanBoard tasks={tasks} />
      </div>

      {isAIHelperOpen && <AIHelperModal onClose={toggleAIHelper} />}
    </DashboardLayout>
  );
}
