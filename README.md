# 📝 ThinkBoard — MERN Notes App

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

> 🚧 A personal project built to practice the **MERN stack** — not production software.

---

## 📖 About

ThinkBoard is a simple note-taking app I built to reinforce core MERN concepts: RESTful API design, React state management, client-side routing, and database modelling with Mongoose. The main technical highlight is the **Upstash Redis rate limiter** applied globally across all API routes — with a graceful in-app UI response when the limit is hit, rather than an uncaught crash.

---

## ✨ Key Highlights

### 🔒 Rate Limiting (Upstash Redis)

Every request passes through a Redis-backed rate limiter (`@upstash/ratelimit`). When the limit is exceeded, the API returns `429 Too Many Requests`. The frontend detects this status code and swaps the page content for a user-friendly `RateLimitedUI` component — no crashes, no blank pages.

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

---

## 🛠️ Prerequisites

- Node.js `>= 18`
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier)
- An [Upstash Redis](https://upstash.com/) database (free tier)

---

## ⚙️ Installation

```bash
# 1. Clone the repo
git clone https://github.com/metricgarlic117/mern-thinkboard.git 
cd mern-thinkboard-main

# 2. Install server & client dependencies
cd server && npm install
cd ../client && npm install
```

Create `server/.env` (see below), then:

```bash
# Run the backend (port 5001)
cd server && npm run dev

# Run the frontend (port 5173)
cd client && npm run dev
```

---

## 🔐 Environment Variables

Create a `server/.env` file with these keys — **never commit this file**:

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `PORT` | Server port (default `5001`) |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST endpoint |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis auth token |

---

## 📄 License

MIT — free to use and learn from.

---

> _Built as a learning exercise. Feedback welcome!_
