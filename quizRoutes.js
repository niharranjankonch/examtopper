// routes/quizRoutes.js
const express = require('express');
const Quiz = require('../models/Quiz');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new quiz (Protected Route)
router.post('/create', authMiddleware, async (req, res) => {
    const { subject, chapter, questions } = req.body;
    try {
        const newQuiz = new Quiz({ subject, chapter, questions });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get quizzes by subject & chapter
router.get('/:subject/:chapter', async (req, res) => {
    try {
        const quizzes = await Quiz.find({ subject: req.params.subject, chapter: req.params.chapter });
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
