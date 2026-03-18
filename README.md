# 📝 ThinkBoard — MERN Notes App

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

**🌍 Live Demo:** [https://mern-thinkboard-0l1o.onrender.com/](https://mern-thinkboard-0l1o.onrender.com/)

> A personal project built to practice the **MERN stack** — not production software.

---

## 📖 About

ThinkBoard is a simple note-taking app built to reinforce core MERN concepts: RESTful API design, React state management, client-side routing, and database modelling with Mongoose. The main technical highlight is the **Upstash Redis rate limiter** applied globally across all API routes — with a graceful in-app UI response when the limit is hit, rather than an uncaught crash or blank page.

---

## ✨ Key Highlights

### 🔒 Rate Limiting — Upstash Redis

Every request passes through a Redis-backed rate limiter (`@upstash/ratelimit`). When the limit is exceeded, the API returns `429 Too Many Requests`. The frontend detects this status code and replaces the page content with a user-friendly `RateLimitedUI` component — no crashes, no blank pages, no silent failures.

### 🧩 Libraries & Plugins

| Layer | Package | Purpose |
|-------|---------|---------|
| Frontend | `react-router` v7 | Client-side page routing |
| Frontend | `axios` | HTTP client with interceptor support |
| Frontend | `react-hot-toast` | Non-intrusive toast notifications |
| Frontend | `lucide-react` | Consistent icon set |
| Frontend | `tailwindcss` + `daisyui` | Utility-first styling + component library |
| Backend | `express` v5 | REST API framework |
| Backend | `mongoose` | MongoDB ODM & schema validation |
| Backend | `@upstash/ratelimit` | Redis-backed rate limiting |
| Backend | `dotenv` | Environment variable management |
| Backend | `cors` | Cross-origin request handling |
| Backend | `nodemon` | Auto-restart during development |

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) `>= 18`
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster *(free tier works)*
- An [Upstash Redis](https://upstash.com/) database *(free tier works)*

---

## ⚙️ Installation

```bash
# 1. Clone the repo
git clone https://github.com/metricgarlic117/mern-thinkboard.git
cd mern-thinkboard-main

# 2. Install all dependencies & build the client (run from root)
npm run build
```

Create a `server/.env` file (see [Environment Variables](#-environment-variables) below), then:

```bash
# Start the server (http://localhost:5001)
npm start
```

> For development with hot-reload, run the server and client separately:
>
> ```bash
> cd server && npm run dev   # backend on http://localhost:5001
> cd client && npm run dev   # frontend on http://localhost:5173
> ```

---

## 🔐 Environment Variables

Create `server/.env` with the following keys — **never commit this file**:

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `PORT` | Server port (default: `5001`) |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST endpoint URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis auth token |

---

## 📄 License

MIT — free to use and learn from.

---

> *Built as a learning exercise. Feedback welcome!*
