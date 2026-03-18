# 📝 Notes App

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

> A full-stack MERN notes application with a clean UI and built-in API rate limiting.

---

## 📖 Description

**Notes App** is a full-stack web application that lets users create, read, update, and delete personal notes. Built on the MERN stack, it pairs a React 19 + Vite frontend styled with TailwindCSS and DaisyUI against a RESTful Express 5 API backed by MongoDB Atlas. All API traffic is protected by Upstash Redis-powered rate limiting to prevent abuse.

---

## 📚 Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration / Environment Variables](#configuration--environment-variables)
5. [Usage](#usage)
6. [API Reference](#api-reference)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## ✨ Features

- **Full CRUD** — Create, read, update, and delete notes with instant UI feedback
- **Rate Limiting** — Upstash Redis rate limiter protects every API endpoint; exceeded limits surface a friendly in-app UI instead of a crash
- **Responsive Design** — TailwindCSS + DaisyUI components that look great on any screen size
- **Toast Notifications** — Non-intrusive success and error toasts via `react-hot-toast`
- **Client-side Routing** — Fast, seamless navigation using React Router v7

---

## 🛠️ Prerequisites

| Tool | Minimum Version |
|------|----------------|
| [Node.js](https://nodejs.org/) | `>= 18` |
| [npm](https://www.npmjs.com/) | `>= 9` |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | Any (free tier works) |
| [Upstash Redis](https://upstash.com/) | Any (free tier works) |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/notes-app.git
cd notes-app
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Install client dependencies

```bash
cd ../client
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server/` directory (see [Configuration](#configuration--environment-variables) below).

### 5. Start the development servers

**Server** (runs on `http://localhost:5001`):
```bash
cd server
npm run dev
```

**Client** (runs on `http://localhost:5173`):
```bash
cd client
npm run dev
```

---

## 🔐 Configuration / Environment Variables

Create `server/.env` with the following keys:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/notes_db` |
| `PORT` | Port the Express server listens on | `5001` |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST endpoint URL | `https://your-db.upstash.io` |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST auth token | `AXXXg...` |

> **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

## 🚀 Usage

Once both servers are running, open [http://localhost:5173](http://localhost:5173) in your browser.

- **Home page** — View all notes
- **Create** — Click "New Note", fill in a title and content, then hit **Create Note**
- **Edit** — Click any note card to open its detail page; make changes and hit **Save Changes**
- **Delete** — On the detail page, click **Delete Note** and confirm the prompt

If you exceed the request rate limit, the app will display a **Rate Limit Reached** banner instead of a blank page or error.

---

## 📡 API Reference

Base URL: `http://localhost:5001/api`

All endpoints return JSON. A `429 Too Many Requests` response is returned when the rate limit is exceeded.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/notes` | Retrieve all notes |
| `GET` | `/notes/:id` | Retrieve a single note by ID |
| `POST` | `/notes` | Create a new note |
| `PUT` | `/notes/:id` | Update an existing note |
| `DELETE` | `/notes/:id` | Delete a note |

### Request / Response Examples

**POST `/api/notes`**

```json
// Request body
{
  "title": "My First Note",
  "content": "This is the note content."
}

// 201 Created
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "title": "My First Note",
  "content": "This is the note content.",
  "createdAt": "2024-09-01T12:00:00.000Z",
  "updatedAt": "2024-09-01T12:00:00.000Z"
}
```

**GET `/api/notes/:id`**

```json
// 200 OK
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "title": "My First Note",
  "content": "This is the note content.",
  "createdAt": "2024-09-01T12:00:00.000Z",
  "updatedAt": "2024-09-01T12:00:00.000Z"
}
```

---

## 🧪 Testing

No automated test suite is configured yet. To run the placeholder test script:

```bash
cd server
npm test
```

To manually test the API, you can use [Postman](https://www.postman.com/) or `curl`:

```bash
# Get all notes
curl http://localhost:5001/api/notes

# Create a note
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","content":"World"}'
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes with a descriptive message: `git commit -m "feat: add your feature"`
4. **Push** to your fork: `git push origin feature/your-feature-name`
5. **Open a Pull Request** targeting the `main` branch

Please keep PRs focused and ensure the app runs without errors before submitting.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

| | |
|--|--|
| **GitHub** | [@your-username](https://github.com/your-username) |
| **Email** | your-email@example.com |

> _Built with ☕ using the MERN stack._
