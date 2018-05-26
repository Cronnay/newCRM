const router = require('express').Router();
const passport = require('passport');

//Auth login
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.send('Logging out');
});

//Google login
router.get('/google', passport.authenticate("google", {
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('Redirect url')
});

module.exports = router;