// frontend/src/components/Sidebar.js
import React from "react";
import { HomeIcon, FolderIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="text-xl font-bold mb-8">TaskHub</div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FolderIcon className="w-5 h-5 mr-2" />
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          New Project
        </button>
      </div>
    </aside>
  );
}
