import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import User from './models/User.js';
import usersRouter from './routes/usersRouter.js';
import authRouter from './routes/authRouter.js';
import postsRouter from './routes/postsRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/', usersRouter);
app.use('/api/v1/', authRouter);
app.use('/api/v1/', postsRouter);


mongoose.connect(process.env.DB_URL).then(()=>{
  console.log('DB connected!');
}).catch((err)=>(console.log(err)));

app.listen(process.env.PORT, ()=>{
  console.log('Server has been started on port ' + process.env.PORT);
});
