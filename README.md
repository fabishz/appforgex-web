# AppforgeX - Digital Showcase & Training Portal

**AppforgeX** is a modern, enterprise-grade digital showcase and Learning Management System (LMS) built to demonstrate cutting-edge web technologies. It features a polished marketing front-end and a secure, interactive training portal for users to enroll in and master technical skills.

![AppforgeX Banner](public/appforgex-logo.png)

## 🚀 Features

### 🏢 Digital Showcase (Marketing)
- **Modern UI/UX**: Built with **Shadcn UI** and **Tailwind CSS** for a premium, responsive aesthetic.
- **Comprehensive Pages**: Home, About, Services, Portfolio, Technologies, Careers, and Contact.
- **Dynamic Routing**: Optimized routing structure using Next.js App Router.
- **SEO Optimized**: Semantic HTML and metadata configuration.

### 🎓 Training Portal (LMS)
- **Secure Authentication**: User registration and login powered by **Auth.js (NextAuth v5)**.
- **Dashboard Layout**: Dedicated, distraction-free learning environment with sidebar navigation.
- **Interactive Course Player**: 
    - Full video, article, and quiz lesson support.
    - Real-time progress tracking.
    - Collapsible syllabus.
- **Course Catalog**: Filterable list of courses (All, Beginner, Intermediate, Advanced).
- **User Profiles**: Personalized dashboard showing enrolled courses and progress.

### 🛠 Technical Highlights
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Actions).
- **Database**: [Neon Postgres](https://neon.tech/) (Serverless).
- **Authentication**: [Auth.js](https://authjs.dev/) with Credentials provider and bcrypt hashing.
- **Styling**: Tailwind CSS, Lucide Icons, and Shadcn UI components.
- **Architecture**: Separated `(marketing)` and `(dashboard)` route groups for optimized layouts.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js 18+ installed.
- A **Neon Postgres** database account (or any PostgreSQL instance).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/appforgex-digital-showcase.git
    cd appforgex-digital-showcase
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory:
    ```env
    # Database (Neon Postgres)
    DATABASE_URL="postgres://user:password@endpoint.neon.tech/neondb?sslmode=require"

    # Authentication
    AUTH_SECRET="your-generated-secret-key" # Generate with: npx auth secret
    NEXTAUTH_URL="http://localhost:3000"    # Use your production URL when deploying
    ```

4.  **Initialize Database Schema:**
    Run the provided SQL script to set up the `users` and `lessons` tables.
    You can run the contents of `src/lib/schema.sql` in your Neon SQL Editor.

5.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📂 Project Structure

```bash
src/
├── app/
│   ├── (marketing)/      # Public pages (Home, About, Contact...)
│   │   └── layout.tsx    # Standard Navbar + Footer layout
│   ├── (dashboard)/      # Protected Learning Portal
│   │   └── training/     # Training specific routes
│   │       └── layout.tsx # Sidebar + Clean Header layout
│   └── api/              # API Routes (Auth, Contact, Services)
├── components/
│   ├── auth/             # Login/Register forms, UserMenu
│   ├── layout/           # Navbar, Footer
│   ├── training/         # CoursePlayer, CourseCard
│   └── ui/               # Shadcn UI primitives (Button, Input, etc.)
├── lib/
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Database connection pool
│   └── schema.sql        # Reference SQL schema
└── middleware.ts         # Route protection logic
```

## 🔐 Authentication Flow
- **Middleware**: Intercepts requests to `/training/*`. Unauthenticated users are redirected to `/login`.
- **Sign Up**: Users can create an account at `/register`. Passwords are hashed before storage.
- **Session**: User sessions are managed via secure HTTP-only cookies.

## 🚀 Deployment

The application is optimized for deployment on **Vercel**.

1.  Push your code to a Git repository.
2.  Import the project into Vercel.
3.  Add the environment variables (`DATABASE_URL`, `AUTH_SECRET`) in the Vercel dashboard.
4.  Deploy!

## 📄 License
This project is licensed under the MIT License.
