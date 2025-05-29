const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Register admin (à utiliser une seule fois, puis désactiver en prod)
router.post('/register', register);
// Login admin
router.post('/login', login);

module.exports = router;
