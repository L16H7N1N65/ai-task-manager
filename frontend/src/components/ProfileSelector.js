import React, { useState } from "react";

export default function ProfileSelector({ profiles, onSelectProfile, onCreateProfile }) {
  const [newProfile, setNewProfile] = useState("");

  const handleCreate = () => {
    if (!newProfile.trim()) return;
    onCreateProfile(newProfile);
    setNewProfile("");
  };

  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Profiles</h2>
      <select
        className="w-full p-2 border rounded mb-2"
        onChange={(e) => onSelectProfile(e.target.value)}
      >
        <option value="">-- Select a Profile --</option>
        {profiles.map((profile) => (
          <option key={profile.id} value={profile.id}>
            {profile.name}
          </option>
        ))}
      </select>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="New profile name"
          className="flex-1 p-2 border rounded"
          value={newProfile}
          onChange={(e) => setNewProfile(e.target.value)}
        />
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Create
        </button>
      </div>
    </div>
  );
}
