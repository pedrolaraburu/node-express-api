const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

// User routes
router.get('/users/', controller.getStudents); // get all users
router.get('/users/:id', controller.getStudentsById); // get by specific id
router.post('/users/', controller.insertStudent); // create an user
router.delete('/users/:id', controller.deleteStudent); // delete an user by id
  

module.exports = router;
