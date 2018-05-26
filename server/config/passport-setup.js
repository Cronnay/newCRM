const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
import { findOrCreate } from './../authentication/';
import { Secret } from './secretinfo';

passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: Secret.clientID,
    clientSecret: Secret.clientSecret
  }, (accessToken, refreshToken, profileInformation, done) => {
    console.log(findOrCreate(profileInformation));
  })
);