# Skill Match - A JOB PORTAL

🔗 Live Frontend: https://job-portal-lac-chi.vercel.app/
Skill Match is a full‑stack placement/job portal built with:
- Backend: Node.js + Express + MongoDB (+ Cloudinary for image uploads)
- Frontend: React + Vite + Tailwind CSS

This README collects important details and instructions for development, running, and deployment.

## Features
- User authentication (signup / login / protected routes)
- Company management (create, list, update)
- Job postings (create, list, filter)
- Job applications (apply, list applied jobs)
- Admin area to manage companies, jobs and applicants
- Image uploads (Cloudinary)

## Repo layout (important files)
- backend/
  - index.js — Express app entry
  - .env — environment variables (not committed)
  - controllers/ — request handlers (user, company, job, application)
  - models/ — Mongoose models
  - routes/ — route definitions
  - middlewares/isAuthenticated.js — JWT auth middleware
  - utils/cloudinary.js, datauri.js, db.js — utilities
- frontend/
  - index.html, vite.config.js, tailwind.config.js
  - src/
    - main.jsx, App.jsx
    - components/ — UI & pages (including admin and auth)
    - redux/ — Redux slices & store
    - hooks/ — custom data hooks
    - utils/constant.jsx, lib/utils.jsx

## Prerequisites
- Node.js (v16+ recommended)
- npm (or yarn)
- MongoDB (local or Atlas)
- Cloudinary account (for uploads)

## Environment variables (backend/.env example)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Keep secrets out of source control.

## Install & Run (Windows - PowerShell or CMD)
Backend
- cd backend
- npm install
- Development: npm run dev (if package.json has nodemon)
- Production: npm start

Frontend
- cd frontend
- npm install
- Dev server: npm run dev (Vite — default port 5173)
- Build: npm run build
- Preview build: npm run preview

Default runtime ports
- Backend: configured via PORT (commonly 5000)
- Frontend Vite: http://localhost:5173

## Important API endpoints (high level)
Base URL: http://localhost:<PORT>/api
- /api/users — auth & profile endpoints (signup, login, profile)
- /api/companies — create/list/update companies
- /api/jobs — create/list/filter jobs
- /api/applications — apply to jobs, list applications

(See backend/routes/*.js and backend/controllers/*.js for exact endpoints and payload examples.)

## Notable implementation details
- Authentication uses JWT and is enforced by middlewares/isAuthenticated.js
- File/image uploads use Cloudinary via utils/cloudinary.js and a multer middleware
- Redux slices in frontend manage auth, companies, jobs, applications
- Custom hooks (src/hooks) wrap fetch calls and are used by components
- Admin UI located under src/components/admin/* for job/company/applicant management

## Development tips
- Ensure MongoDB URI and Cloudinary credentials are valid before starting backend
- Use browser devtools + Vite HMR for frontend changes
- Check backend logs in the terminal for API errors
- Add seed or test data directly in MongoDB when needed

## Testing & Linting
- No automated tests included by default — consider adding Jest/RTL for frontend and Jest/Supertest for backend
- ESLint config present in frontend (`eslint.config.js`)

## Deployment
- Backend: deploy to a Node host  with environment variables set
- Frontend: build with `npm run build` and serve static files (Netlify, Vercel, or static hosting)
- Configure CORS and secure JWT secret & DB connection string in production

## Contributing
- Create issues for bugs/feature requests
- Fork -> branch -> PR
- Keep commits focused and document changes in PR description

