# 🎬 Screensage

A full-stack streaming platform for discovering, searching, and watching movies and TV shows with a beautiful user interface and seamless video playback experience.

<div align="center">

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-black)](https://expressjs.com/)

</div>

---

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with JWT tokens
- 🎥 **Movie & TV Shows Library** - Browse trending movies and TV shows powered by TMDB API
- 🔍 **Advanced Search** - Search for movies and TV shows with real-time results
- 📝 **Watchlist Management** - Add/remove content to your personal watchlist
- ▶️ **Video Streaming** - High-quality HLS video streaming with multiple quality options
- 📱 **Responsive Design** - Beautiful UI optimized for all devices
- 🎨 **Modern UI** - Built with Tailwind CSS for a sleek, modern interface
- 💾 **User Profiles** - Personalized user profiles with watch history and preferences

---

<!-- ## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Library |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Styling |
| **Zustand** | State management |
| **React Router** | Navigation |
| **Axios** | HTTP client |
| **React Player** | Video playback |
| **Video.js** | Advanced video player |
| **Lucide React** | Icons |
| **React Hot Toast** | Notifications |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication |
| **Bcryptjs** | Password hashing |
| **CORS** | Cross-origin requests |
| **Multer** | File upload handling |
| **Axios** | HTTP client |
| **uuid** | Unique ID generation |

### APIs
- **TMDB API** - Movie and TV show data
- **HLS Streaming** - Video delivery format

--- -->

## 📂 Project Structure

```
screensage/
├── frontend/                      # React frontend application
│   ├── src/
│   │   ├── components/           # Reusable React components
│   │   │   ├── Navbar.jsx       # Navigation component
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   ├── MovieSlider.jsx  # Movie carousel
│   │   │   ├── videoPlayer.jsx  # Video player component
│   │   │   └── skeletons/       # Loading skeletons
│   │   ├── pages/               # Page components
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   ├── searchPage.jsx
│   │   │   ├── watchlisstPage.jsx
│   │   │   ├── profile.jsx
│   │   │   └── home/
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useGetTrendingContent.jsx
│   │   │   └── fetchGeners.jsx
│   │   ├── store/               # Zustand state management
│   │   │   ├── authUser.js
│   │   │   └── content.js
│   │   ├── utils/               # Utility functions
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── eslint.config.js
│
├── backend/                       # Node.js backend application
│   ├── server.js                 # Server entry point
│   ├── config/                   # Configuration files
│   │   ├── db.js                # Database connection
│   │   └── envVars.js           # Environment variables
│   ├── controllers/              # Route controllers
│   │   ├── auth.controller.js   # Authentication logic
│   │   ├── movie.controller.js  # Movie endpoints
│   │   ├── tv.controller.js     # TV show endpoints
│   │   ├── searchcontroller.js  # Search logic
│   │   └── watchcontroller.js   # Watchlist logic
│   ├── routes/                   # API routes
│   │   ├── auth.route.js
│   │   ├── movie.route.js
│   │   ├── tv.route.js
│   │   ├── searchroute.js
│   │   └── watchRoutes.js
│   ├── models/                   # MongoDB schemas
│   │   ├── user.model.js
│   │   └── watchlist.js
│   ├── middleware/               # Express middleware
│   │   └── protectRoute.js      # Authentication middleware
│   ├── services/                 # External service integrations
│   │   └── tmdb.service.js      # TMDB API service
│   ├── utils/                    # Utility functions
│   │   └── generateToken.js     # JWT token generation
│   └── uploads/                  # Video storage
│       └── courses/              # HLS video segments
│
├── package.json                   # Root package configuration
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- TMDB API key (get from [TMDB](https://www.themoviedb.org/settings/api))
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd screensage
```

2. **Setup Environment Variables**

Create a `.env` file in the root directory:

```env
# Backend
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
NODE_ENV=development

# TMDB API
TMDB_API_KEY=<your_tmdb_api_key>
TMDB_BASE_URL=https://api.themoviedb.org/3

# Frontend
VITE_API_BASE_URL=http://localhost:5000
```

3. **Install Dependencies**

```bash
# Install root dependencies
npm install

# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

4. **Run the Application**

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

---

## 🔑 Key Features Explained

### 🔐 Authentication Flow

- Users can signup with email and password
- Passwords are hashed using bcryptjs
- JWT tokens are issued upon login and stored in cookies
- Protected routes require valid JWT tokens

### 🎬 Content Discovery

- Integrates with TMDB API for real-time movie and TV show data
- Browse trending content, search by genre
- Advanced search functionality with filters

### 📺 Video Streaming

- HLS (HTTP Live Streaming) format for reliable playback
- Video segments stored in organized directory structure
- Support for multiple quality options
- Smooth streaming with buffering capabilities

### 📚 Watchlist Management

- Add/remove movies and shows from watchlist
- Persistent storage in MongoDB
- Quick access from user profile

---

## 🛡️ Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcryptjs for secure password storage
- **Protected Routes** - Middleware to protect sensitive endpoints
- **CORS Configuration** - Restrict cross-origin requests
- **Cookie-based Sessions** - Secure cookie handling

---

## 📦 Scripts

### Root Level

```bash
npm run dev        # Start development server
npm start          # Start production server
npm run build      # Build entire project
```

### Frontend

```bash
npm run dev        # Start Vite dev server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

### Backend

Managed via root scripts with nodemon for hot reload in development

---

## 🌐 Environment Configuration

### Development

```
NODE_ENV=development
```

### Production

```
NODE_ENV=production
```

Ensure all required environment variables are set in `.env` file before running the application.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Quick Links

- 🌍 [TMDB API Documentation](https://developer.themoviedb.org/docs)
- ⚛️ [React Documentation](https://react.dev)
- 🚀 [Express.js Documentation](https://expressjs.com/)
- 📚 [MongoDB Documentation](https://docs.mongodb.com/)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/)

---

## 💡 Future Enhancements

- [ ] User ratings and reviews
- [ ] Recommendations based on viewing history
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Social sharing features
- [ ] Mobile app (React Native)
- [ ] Advanced filtering options
- [ ] Download for offline viewing

---

⭐ If you find this project helpful, please consider giving it a star!

</div>
