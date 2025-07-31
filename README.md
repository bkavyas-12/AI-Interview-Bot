# 🤖 AI Interview Bot

A comprehensive web-based AI Interview Bot that simulates real interview experiences for candidates with voice/text input, NLP-powered analysis, and performance tracking.

## 📋 Project Overview

The AI Interview Bot helps candidates practice interviews through AI-generated questions, real-time response analysis, and detailed feedback. Built with vanilla JavaScript frontend and Python Flask backend.

## 🚀 Features

### Core Functionality
- **User Authentication**: Secure registration and login system
- **AI-Generated Questions**: Dynamic interview questions based on job roles
- **Multi-Input Support**: Voice and text response capabilities
- **NLP Analysis**: Advanced answer scoring using spaCy/NLTK
- **Performance Tracking**: Historical interview data and progress analytics
- **Real-time Feedback**: Instant scoring and improvement suggestions

### Technical Features
- **Responsive Design**: Mobile-first, accessible interface
- **RESTful API**: Clean backend architecture with Flask
- **Voice Integration**: Google Speech-to-Text API support
- **Data Persistence**: SQLite database for user data and sessions
- **Real-time Communication**: WebSocket support for live interactions

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox/Grid
- **Vanilla JavaScript**: ES6+ features, no frameworks
- **Web APIs**: Speech Recognition, Media Recorder

### Backend
- **Python 3.8+**: Core programming language
- **Flask**: Lightweight web framework
- **SQLite**: Database for development
- **spaCy/NLTK**: Natural Language Processing
- **Google Speech-to-Text**: Voice recognition service

## 📁 Project Structure

```
ai-interview-bot/
├── frontend/
│   ├── index.html              # Landing page
│   ├── login.html              # Authentication page
│   ├── dashboard.html          # Interview dashboard
│   ├── interview.html          # Active interview page
│   ├── feedback.html           # Feedback and results
│   ├── css/
│   │   ├── main.css           # Global styles
│   │   ├── components.css     # Component styles
│   │   └── responsive.css     # Media queries
│   ├── js/
│   │   ├── main.js            # Core application logic
│   │   ├── auth.js            # Authentication handling
│   │   ├── interview.js       # Interview functionality
│   │   ├── voice.js           # Voice recognition
│   │   └── api.js             # API communication
│   └── assets/
│       ├── icons/
│       └── images/
├── backend/
│   ├── app.py                 # Flask application entry
│   ├── config.py              # Configuration settings
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py            # User model
│   │   ├── interview.py       # Interview model
│   │   └── question.py        # Question model
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py            # Authentication routes
│   │   ├── interview.py       # Interview routes
│   │   └── api.py             # API endpoints
│   ├── services/
│   │   ├── __init__.py
│   │   ├── nlp_analyzer.py    # NLP processing
│   │   ├── question_generator.py # Question generation
│   │   └── voice_processor.py # Voice processing
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── database.py        # Database utilities
│   │   └── helpers.py         # Helper functions
│   └── data/
│       ├── questions.json     # Question database
│       └── interview.db       # SQLite database
├── docs/
│   ├── api-documentation.md
│   ├── deployment-guide.md
│   └── user-manual.md
├── tests/
│   ├── test_auth.py
│   ├── test_interview.py
│   └── test_nlp.py
├── requirements.txt
├── .gitignore
└── README.md
```

## 📅 Development Timeline

### Week 1: Project Setup ✅
- [x] Project structure and documentation
- [x] Repository setup and initial files
- [x] Technology stack finalization
- [x] Development environment configuration

### Week 2: UI/UX Development
- [ ] Landing page design and implementation
- [ ] Authentication pages (login/signup)
- [ ] Interview dashboard interface
- [ ] Feedback and results pages
- [ ] Mobile responsiveness and accessibility

### Week 3: Backend Setup & API Integration
- [ ] Flask application structure
- [ ] Database models and migrations
- [ ] REST API endpoints
- [ ] Authentication middleware
- [ ] Session management

### Week 4: NLP Scoring System
- [ ] spaCy/NLTK integration
- [ ] Answer analysis algorithms
- [ ] Scoring logic implementation
- [ ] Feedback generation system

### Week 5: Voice Support & Feedback Collection
- [ ] Google Speech-to-Text integration
- [ ] Voice recording functionality
- [ ] Audio-to-text processing
- [ ] Enhanced feedback collection

### Week 6: Testing & Deployment
- [ ] Comprehensive testing suite
- [ ] Bug fixes and optimization
- [ ] Production deployment
- [ ] Documentation finalization

## 🚦 Getting Started

### Prerequisites
- Python 3.8 or higher
- Node.js (for development tools)
- Modern web browser with microphone support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-interview-bot.git
   cd ai-interview-bot
   ```

2. **Set up Python environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys and configuration
   ```

4. **Initialize database**
   ```bash
   python backend/init_db.py
   ```

5. **Run the application**
   ```bash
   python backend/app.py
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:5000`

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Interview Management
- `GET /api/interviews` - List user interviews
- `POST /api/interviews` - Create new interview session
- `GET /api/interviews/:id` - Get interview details
- `PUT /api/interviews/:id` - Update interview session

### Questions and Responses
- `GET /api/questions` - Get interview questions
- `POST /api/responses` - Submit interview response
- `GET /api/feedback/:id` - Get response feedback

## 🧪 Testing

Run the test suite:
```bash
python -m pytest tests/
```

For frontend testing:
```bash
# Serve frontend files locally
python -m http.server 8000 --directory frontend
```

## 🚀 Deployment

### Development
The application runs locally on `http://localhost:5000` with hot reloading enabled.

### Production
Deployment guides available for:
- Heroku
- PythonAnywhere
- Render
- DigitalOcean

See `docs/deployment-guide.md` for detailed instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ for helping candidates ace their interviews!

---

**Next Steps**: Begin Week 2 development with UI/UX implementation.