import axios from "axios";

export const generateTaskFromAI = async (title) => {
  try {
    const response = await axios.post("http://localhost:5000/api/ai/generate-task", { title });
    return response.data;
  } catch (error) {
    console.error("AI Task Generation Error:", error);
    return null;
  }
};
