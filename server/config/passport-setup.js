const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import { findOrCreate, User } from './../authentication/';
import { Secret } from './secretinfo';


passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: Secret.clientID,
    clientSecret: Secret.clientSecret
  }, 
  (accessToken, refreshToken, profile, done) => {
    User.findOne({where: {googleId: profile.id}})
    .then(user => {
      if (user === null) {
        User.create({
          displayName: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value
        }).then(newUser => {
          done(null, newUser);
        });
      } else {
        done(null, user);
      }
    });
  })
);