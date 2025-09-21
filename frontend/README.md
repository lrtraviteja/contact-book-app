# Contact Book Frontend

This is the frontend application for the Contact Book app, built with React, Vite, and TailwindCSS. It provides a user interface to manage contacts including adding, editing, deleting, and viewing contacts with pagination and theme toggle support.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js) or yarn

## Installation

1. Clone the repository and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## Available Scripts

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Technologies Used

### Core Dependencies
- **React 19.1.1** - JavaScript library for building user interfaces
- **React DOM 19.1.1** - React rendering for web
- **Vite 7.1.6** - Fast build tool and development server
- **TailwindCSS 4.1.13** - Utility-first CSS framework

### Additional Libraries
- **Axios 1.12.2** - HTTP client for API requests
- **React Icons 5.5.0** - Icon library
- **React Toastify 11.0.5** - Toast notifications

### Development Tools
- **ESLint** - Code linting and formatting
- **@vitejs/plugin-react** - Vite plugin for React support
- **@tailwindcss/vite** - Vite plugin for TailwindCSS

## Project Structure

- `src/` - Source files
  - `components/` - React components:
    - `ContactForm/` - Form to add or edit contacts
    - `ContactItem/` - Individual contact item display
    - `ContactsList/` - List of contacts with delete and pagination controls
    - `Header/` - Header with theme toggle and search
    - `Pagination/` - Pagination controls
  - `context/` - React context for state management (ContactContext.jsx)
  - `api/` - API service for backend communication (contactService.js)
  - `App.jsx` - Main application component
  - `main.jsx` - React app entry point
- `public/` - Static assets
- `vite.config.js` - Vite configuration file with React and TailwindCSS plugins and API proxy setup

## Features

- Add, edit, delete individual contacts
- Delete all contacts with confirmation
- Pagination support for contact list
- Light and dark theme toggle
- API communication proxied to default backend server at `http://localhost:3000/api`

## Linting

ESLint is configured for the project. To run linting, use:

```bash
npm run lint
```

## Notes

- This project uses Vite for fast development and build.
- The development server runs on port 5173 by default.
- Make sure the backend server is running on port 3000 to enable API communication.
- The frontend proxies API requests starting with `/api` to the backend server.
