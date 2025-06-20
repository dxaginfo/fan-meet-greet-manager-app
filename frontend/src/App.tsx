import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout components
import Layout from './components/layout/Layout';

// Page components (placeholders - to be implemented)
const HomePage = () => <div>Home Page</div>;
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;
const EventsPage = () => <div>Events Page</div>;
const EventDetailsPage = () => <div>Event Details Page</div>;
const DashboardPage = () => <div>Dashboard Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const NotFoundPage = () => <div>404 - Page Not Found</div>;

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;