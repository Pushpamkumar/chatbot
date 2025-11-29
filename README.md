🚀 AI Chatbot — Full Stack Chat Interface (TypeScript + Vite + Tailwind + Docker)

This project is a frontend chatbot application built using TypeScript, Vite, Tailwind CSS, and modern JavaScript tooling.
It provides an interactive chat UI, message flow handling, reusable components, and a clean project architecture ideal for integrating AI APIs like OpenAI, Gemini, or custom LLM backends.

⭐ Features
✅ 1. Modern, Fast Frontend Architecture

Built using Vite for ultra-fast bundling and dev server

Uses TypeScript for type-safe development

Clean and modular structure inside the src/ directory

✅ 2. Chat UI Components

A responsive chat interface

User and bot message components

Smooth scrolling, message history updates

Reusable functions for message formatting

✅ 3. Tailwind CSS Styling

Professional UI with minimal custom CSS

Fully responsive dashboard-like layout

✅ 4. API-Ready Architecture

You can plug in:

OpenAI API

Gemini API

Your own backend model

LangChain server

Any REST/GraphQL endpoint

⚡ How?

Through a single API call inside your TypeScript service functions.

✅ 5. Docker Support

The project includes a Dockerfile for:

Production build

Containerized deployment on AWS/GCP/Render/Vercel

Example:
docker build -t chatbot .
docker run -p 8080:80 chatbot

✅ 6. Developer-Friendly

Includes:

eslint.config.js for code linting

tsconfig.json + tsconfig.node.json for managing TS builds

postcss.config.js and tailwind.config.js for design customization

🗂️ Project Structure
.
├── src/
│   ├── components/        # Reusable chat UI blocks
│   ├── assets/            # Icons, images
│   ├── styles/            # Global styles
│   ├── main.ts            # App entry point
│   ├── chatbot.ts         # Chat logic / API calls
│   └── utils.ts           # Helper functions
│
├── index.html             # Root HTML file
├── package.json           # Dependencies
├── Dockerfile             # Deployment container
├── tailwind.config.js     # Tailwind settings
├── postcss.config.js      # CSS processing pipeline
├── vite.config.ts         # Vite config
└── README.md

🚀 Getting Started
1. Install dependencies
npm install

2. Run development server
npm run dev


Open in browser:

http://localhost:5173

3. Build for Production
npm run build

4. Preview production build
npm run preview

🧠 How the Chatbot Works

User enters a message

Message is passed to a function in chatbot.ts

The function sends this message to your chosen API (OpenAI/Gemini/etc.)

Response is returned and displayed in the UI

Chat history updates dynamically

🛠️ Tech Stack
Frontend

Vite

TypeScript

Tailwind CSS

JavaScript (ES6+)

Tooling

ESLint

PostCSS

Docker

(Optional) Backend / LLM Options

You can integrate:

OpenAI API

Gemini API

AWS Bedrock

LangChain

📦 Build & Deploy with Docker
Build
docker build -t chatbot-app .

Run
docker run -p 8080:80 chatbot-app


Deploy anywhere:

AWS EC2

AWS Elastic Beanstalk

Google Cloud Run

Render

Azure App Service

🙌 Future Enhancements

Add authentication

Store chat history in Firebase / MongoDB

Add speech-to-text + text-to-speech

Add multiple AI models

Add dark/light theme toggle

📄 License

This project is open-source and available under the MIT License.
