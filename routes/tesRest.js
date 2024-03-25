const express = require('express');

const router = express.Router();

// GET Request
router.get('/api/your-endpoint/:field', (req, res) => {
    // Handle GET request logic here
});

// POST Request
router.post('/api/your-endpoint/:field', (req, res) => {
    // Handle POST request logic here
});

// PUT Request
router.put('/api/your-endpoint/:field', (req, res) => {
    // Handle PUT request logic here
});

// PATCH Request
router.patch('/api/your-endpoint/:field', (req, res) => {
    // Handle PATCH request logic here
});

// DELETE Request
router.delete('/api/your-endpoint/:field', (req, res) => {
    // Handle DELETE request logic here
});

module.exports = router;