import express from 'express';
const router = new express.Router();
import LocalStrategy from 'passport-local';
import dotenv from 'dotenv';
import usersController from '../controllers/usersController.js';
LocalStrategy.Strategy;
dotenv.config();

router.route('/users')
    .get(usersController.getMe)
    .post(usersController.createUser)
    .put(usersController.changeMe)
    .delete(usersController.deleteUser);

export default router;
