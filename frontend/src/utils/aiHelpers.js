// src/utils/aiHelpers.js
export const generateKanbanFromAIResponse = (aiResponse) => {
  // Assuming aiResponse is HTML with <li> elements.
  // You might use a DOMParser (in the browser) or regex to split the content.
  const parser = new DOMParser();
  const doc = parser.parseFromString(aiResponse, "text/html");
  const items = Array.from(doc.querySelectorAll("li"));
  const tasks = items.map((li, index) => ({
    id: index + 1,
    title: li.textContent.split(".")[0] || `Task ${index + 1}`,
    description: li.textContent,
    status: "todo",
  }));
  return tasks;
};
