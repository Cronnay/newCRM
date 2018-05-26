const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.send('login');
});

router.get('/google', passport.authenticate("google", {
  scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate("google"), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;