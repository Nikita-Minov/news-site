const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.route('/users')
  .post(async (req, res) => {
    const userExists = await User.findOne({ username: req.body.username });
    if(userExists) return res.status(409).json({message: 'This user already exists!'})
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      const user = new User({username: req.body.username, password: hash, userId: Math.floor(Math.random() * 10000000)});
      user.save((err)=> {
        if(err) console.log(err.message);
      });
    });
    res.status(201).json({message: 'User registered successfully!'});
  })
  .put(async (req, res) => {
    const userExists = await User.findOne({ userId: req.userId});
    if(!userExists) return res.status(404).json({message: 'User is not found!'})
    if(req.body.password) {
      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        await User.findOneAndUpdate({userId: req.userId}, {password: hash});
      });
    }
    await User.findOneAndUpdate({userId: req.userId}, {username: req.body.username, email: req.body.email});
    res.status(200).json({message: 'Data changed successfully!'})
  })
  .delete(async (req, res) => {
    const userId = '1886968';
    const userExists = await User.findOne({ userId: userId});
    if(!userExists) return res.status(404).json({message: 'User is not found!'})
    await User.findOneAndDelete({userId: userId});
    res.status(200).json({message: 'User deleted successfully!'});
  })

module.exports = router;