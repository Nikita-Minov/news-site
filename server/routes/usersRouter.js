import express from 'express';
const router = new express.Router();
import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/users.model.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import usersController from '../controllers/UsersController.js';
import authController from '../controllers/AuthController.js';
LocalStrategy.Strategy;
dotenv.config();

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({username: username}, function(err, user) {
        if (err) done(err);
        if (!user) done(null, false, {message: 'Incorrect username.'});
        bcrypt.compare(password, user.password, function(err, result) {
          if (!result) done(null, false, {message: 'Incorrect password.'});
        });
        return done(null, user);
      });
    },
));
router.route('/users')
    .get(usersController.getMe)
    .post(usersController.createUser)
    .put(usersController.changeMe)
    .delete(usersController.deleteUser);

router.route('/auth')
    .post(passport.authenticate('local'), authController.login)
    .delete(authController.logout);
export default router;
