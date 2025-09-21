# Contact Book App

A full-stack contact management application built with React (frontend) and Node.js/Express (backend). The app allows users to create, read, update, and delete contacts with features like duplicate prevention, pagination, and theme toggle.

## 🚀 Live Demos

- **Frontend App**: https://contact-book-app-gamma.vercel.app/
- **Backend Server**: https://contact-book-app-al0x.onrender.com/

## 📋 Features

### Frontend
- ✅ Modern React UI with TailwindCSS
- ✅ Add, edit, and delete contacts
- ✅ Delete all contacts with confirmation
- ✅ Pagination support
- ✅ Light/Dark theme toggle
- ✅ Responsive design
- ✅ Toast notifications
- ✅ Real-time API integration

### Backend
- ✅ RESTful API with Express.js
- ✅ SQLite database for data persistence
- ✅ Duplicate contact prevention
- ✅ Comprehensive CRUD operations
- ✅ Pagination support
- ✅ Input validation and error handling
- ✅ CORS enabled

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **Vite 7.1.6** - Build tool and dev server
- **TailwindCSS 4.1.13** - CSS framework
- **Axios 1.12.2** - HTTP client
- **React Icons 5.5.0** - Icon library
- **React Toastify 11.0.5** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **SQLite3 5.1.7** - Database driver
- **SQLite 5.1.1** - Database wrapper
- **CORS 2.8.5** - Cross-origin resource sharing
- **Dotenv 17.2.2** - Environment variables
- **Nodemon 3.1.10** - Development auto-restart (dev dependency)

### Built-in Node.js Modules Used
- **Path** - File path utilities (built-in)

## 📁 Project Structure

```
contact-book-app/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # React context providers
│   │   ├── api/            # API service layer
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   ├── .env.example        # Environment variables template
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── backend/                 # Express backend API
│   ├── routes/             # API route handlers
│   ├── database.js         # Database configuration
│   ├── server.js           # Server entry point
│   ├── .env.example        # Environment variables template
│   └── package.json        # Backend dependencies
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/lrtraviteja/contact-book-app.git
cd contact-book-app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start the server
npm run server
```

**Backend Environment Configuration (.env):**
```env
# Database configuration
DB_PATH=./contacts.db

# Server configuration  
PORT=3000

```

The backend will be available at: `http://localhost:3000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start the development server
npm run dev
```

**Frontend Environment Configuration (.env):**
```env
# Backend API base URL
VITE_API_BASE=http://localhost:3000/api

# For production deployment, replace with your deployed backend URL:
# VITE_API_BASE=https://your-backend-url.com/api
```

The frontend will be available at: `http://localhost:5173`

## 🔧 Development

### Backend Development

```bash
cd backend

# Start development server with auto-reload
npm run server

# The API will be available at http://localhost:3000
```

### Frontend Development

```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📡 API Endpoints

### Base URL: `http://localhost:3000/api` (or your deployed backend URL)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/contacts` | Get all contacts (with pagination) |
| POST | `/contacts` | Create a new contact |
| DELETE | `/contacts/:id` | Delete a contact |
| DELETE | `/contacts` | Delete all contacts |

### Example API Usage

```javascript
// Get all contacts with pagination
GET /api/contacts?page=1&limit=10

// Create a new contact
POST /api/contacts
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890"
}
```

## 🌐 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   ```
   VITE_API_BASE=https://your-backend-url.com/api
   ```
4. Deploy

### Backend (Render/Railway/Heroku)

1. Push your code to GitHub
2. Connect your repository to your hosting platform
3. Set environment variables:
   ```
   PORT=3000
   DB_PATH=./contacts.db
   ```
4. Deploy

## 🔒 Environment Variables

### Backend (.env)
```env
# Required
DB_PATH=./contacts.db
PORT=3000

```

### Frontend (.env)
```env
# Required - Backend API URL
VITE_API_BASE=http://localhost:3000/api

# For production
# VITE_API_BASE=https://your-backend-domain.com/api
```

## 🧪 Testing

### Backend Testing
```bash
cd backend

# Test API endpoints manually or use tools like Postman
# Example: Test get all contacts
curl http://localhost:3000/api/contacts
```

### Frontend Testing
```bash
cd frontend

# Lint code
npm run lint

# Build and test production version
npm run build
npm run preview
```

## 📝 Common Issues & Solutions

### Issue: Frontend can't connect to backend
**Solution**: 
1. Ensure backend is running on correct port
2. Check VITE_API_BASE in frontend .env file
3. Verify CORS is properly configured

### Issue: Database errors
**Solution**:
1. Check DB_PATH in backend .env
2. Ensure write permissions for database file
3. Verify SQLite3 is properly installed

### Issue: Build errors
**Solution**:
1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Check Node.js version (v16+ required)
3. Verify all environment variables are set

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open a Pull Request

## 👥 Author

- **GitHub**: [@lrtraviteja](https://github.com/lrtraviteja)

## 🔗 Links

- **Live Frontend Demo**: https://contact-book-app-gamma.vercel.app/
- **Live Backend API**: https://contact-book-app-al0x.onrender.com/api
- **Repository**: https://github.com/lrtraviteja/contact-book-app

---

For more detailed information about individual components, check the README files in the `frontend/` and `backend/` directories.