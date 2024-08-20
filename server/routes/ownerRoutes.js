const express = require('express');
const ownerRoutes = express.Router();

const ownerController = require('../controllers/ownerController');
const ownerAuthMiddleware = require('../middlewares/ownerAuthMiddleware');
const { signup, signin, getMembers, getQuizMembers, getHackathonMembers } = ownerController;

ownerRoutes.post('/signup', signup);
ownerRoutes.post('/signin', signin);
ownerRoutes.get('/members', ownerAuthMiddleware, getMembers);
ownerRoutes.get('/quiz-members', ownerAuthMiddleware, getQuizMembers);
ownerRoutes.get('/hackathon-members', ownerAuthMiddleware, getHackathonMembers);

module.exports = ownerRoutes;