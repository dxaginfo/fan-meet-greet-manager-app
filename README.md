# Fan Meet & Greet Manager

A comprehensive web application for managing fan meet and greet events for music artists, management teams, and event organizers.

## Project Overview

The Fan Meet & Greet Manager is designed to streamline the process of organizing, managing, and executing fan meet and greet events. This application provides tools for scheduling, registration, communication, and coordination of fan interactions with artists.

## Features

- **User Management**: Registration, authentication, and role-based access control
- **Event Creation and Management**: Create, schedule, and customize meet & greet events
- **Fan Registration and Selection**: Allow fans to register and manage selection process
- **Check-in and On-site Management**: Digital check-in and queue management
- **Fan Experience Enhancement**: Photo/video capture and digital memorabilia
- **Reporting and Analytics**: Performance metrics and fan insights

## Technology Stack

### Frontend
- React.js with TypeScript
- Material-UI / Tailwind CSS
- Redux Toolkit
- React Router
- Formik with Yup validation

### Backend
- Node.js with Express
- RESTful API with OpenAPI/Swagger documentation
- JWT authentication with OAuth 2.0 support
- Socket.io for real-time features

### Database
- PostgreSQL for structured data
- Redis for caching and real-time queue management

### Storage
- AWS S3 / Google Cloud Storage for media files

### Deployment
- Docker and Kubernetes
- CI/CD with GitHub Actions
- AWS / Google Cloud Platform / Azure

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- Redis
- Docker (optional, for containerized development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/fan-meet-greet-manager-app.git
   cd fan-meet-greet-manager-app
   ```

2. Install dependencies:

   For the backend:
   ```bash
   cd backend
   npm install
   ```

   For the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Update the variables with your own configuration

4. Set up the database:
   ```bash
   cd backend
   npm run migrate
   npm run seed # Optional, for sample data
   ```

5. Start the development servers:

   For the backend:
   ```bash
   cd backend
   npm run dev
   ```

   For the frontend:
   ```bash
   cd frontend
   npm start
   ```

6. Access the application:
   - Backend API: http://localhost:5000
   - Frontend: http://localhost:3000

### Using Docker

1. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

2. Access the application:
   - Backend API: http://localhost:5000
   - Frontend: http://localhost:3000

## Project Structure

```
fan-meet-greet-manager-app/
├── backend/                # Express.js backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── app.js              # Express app entry point
│
├── frontend/               # React.js frontend
│   ├── public/             # Static files
│   ├── src/                # React components and logic
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux state management
│   │   ├── services/       # API services
│   │   ├── styles/         # CSS/SCSS styles
│   │   ├── utils/          # Utility functions
│   │   └── App.tsx         # Main App component
│   └── package.json        # Frontend dependencies
│
├── docker-compose.yml      # Docker configuration
├── .github/                # GitHub Actions workflows
└── README.md               # Project documentation
```

## API Documentation

API documentation is available at `/api/docs` when running the backend server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Material-UI](https://material-ui.com/)
- [Socket.io](https://socket.io/)