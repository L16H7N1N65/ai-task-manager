const axios = require("axios");

exports.generateTaskDescription = async (req, res) => {
  try {
    const { title } = req.body;

    console.log(`📢 Sending request to Ollama for: ${title}`);

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama2",
      prompt: `Generate a detailed task description for: ${title}`,
      stream: false // 🔹 Ensure streaming is disabled
    });

    console.log(`✅ Response received from Ollama:`, response.data);

    if (!response.data || !response.data.response) {
      throw new Error("Invalid response from Ollama");
    }

    const aiOutput = response.data.response.trim();

    res.json({
      title,
      description: aiOutput,
      priority: "Medium",
      estimated_time: "4 hours",
      subtasks: ["Research topic", "Write draft", "Proofread", "Publish"]
    });
  } catch (error) {
    console.error("❌ AI Generation Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "AI generation failed", details: error.message });
  }
};

