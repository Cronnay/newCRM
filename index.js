const express = require('express');
const app = express();
const cookie = require('cookie-session')
const passport = require('passport');
import { UserSync } from './authentication'; //function ifall jag vill göra om hela user-tabellen.
import { Secret } from './config/secretinfo';

app.use(cookie({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [Secret.cookieKey] 
}))
app.use(passport.initialize());
app.use(passport.session());

const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');



app.use('/auth', authRoutes);

app.listen(4000, () => {
  console.log("Listen to port 4k woo");
});