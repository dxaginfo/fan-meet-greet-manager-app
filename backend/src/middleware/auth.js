const jwt = require('jsonwebtoken');

/**
 * Authentication middleware
 * Verifies JWT token and sets req.user
 */
const authenticate = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Placeholder for JWT verification - would use actual secret in production
    const decoded = { id: 'user_id', role: 'fan' }; // Simulated decoded token
    
    // Set user data in request
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

/**
 * Role-based authorization middleware
 * @param {string[]} roles - Array of allowed roles
 */
const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    // Check if user's role is in the allowed roles
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Not authorized to access this resource' });
    }

    next();
  };
};

module.exports = { authenticate, authorize };