const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 
const taskRoutes = require('./routes/taskRoutes');
const aiRoutes = require('./routes/aiRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config(); 
connectDB(); 

const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);

// Global error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
