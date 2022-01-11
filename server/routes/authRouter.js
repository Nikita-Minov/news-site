import express from 'express';
const router = new express.Router();
import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import authController from '../controllers/authController.js';
LocalStrategy.Strategy;
dotenv.config();

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({username}, function(err, user) {
        if (err) console.log(err);
        if (!user) return done(null, false, {message: 'Incorrect username.'});
        bcrypt.compare(password, user.password, function(err, result) {
          if (!result) {
            return done(null, false, {message: 'Incorrect password.'});
          }
        });
        return done(null, user);
      });
    },
));

router.route('/auth')
    .post(passport.authenticate('local'), authController.login)
    .delete(authController.logout);
export default router;
