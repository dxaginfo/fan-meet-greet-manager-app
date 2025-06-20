const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const eventRoutes = require('./event.routes');
const registrationRoutes = require('./registration.routes');

// API status endpoint
router.get('/', (req, res) => {
  res.json({ 
    status: 'success', 
    message: 'Fan Meet & Greet Manager API', 
    version: '1.0.0' 
  });
});

// Mount route modules
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/registrations', registrationRoutes);

module.exports = router;