# AI Task Manager

AI Task Manager is a full-stack application that allows users to generate and manage tasks using AI-powered task descriptions. The backend is built with Node.js, Express, and Mongoose (MongoDB), and the frontend uses Next.js with Tailwind CSS for a modern, responsive UI.

## Table of Contents

## Installation

### Running Locally

#### 1. Install and Run Ollama (Local AI Model)

1. **Install Ollama:**
   ```bash
   curl -fsSL https://ollama.ai/install.sh | sh

2. **Download a Local Model:**
  ```bash
  ollama pull llama2

3. **Start the Ollama Server:**
  ```bash
  ollama serve

4. **:**
  ```bash

5. **:**
  ```bash


## Features

- **AI-Powered Task Generation:** Generate detailed task descriptions and subtasks using a locally hosted AI model (Ollama with LLaMA 2).
- **Task Management:** Create and view generated tasks in a responsive, modern UI inspired by Trello.
- **Full-Stack Setup:** Separate backend and frontend folders for modularity and maintainability.
- **Responsive Design:** Built with Next.js and Tailwind CSS.

## Technologies

- **Backend:** Node.js, Express, Mongoose (MongoDB)
- **Frontend:** Next.js, React, Tailwind CSS
- **AI Integration:** API calls to a locally hosted AI model (Ollama using LLaMA 2)
- **Testing:** Jest, Supertest (for backend)
- **Containerization :** Docker, docker-compose

