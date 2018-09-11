const keys = require('../config/keys');
const passport = require('passport');
const canUseDatabase = require('../middlewares/canUseDatabase');

module.exports = app => {
  app.get(
    '/auth/google/',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/notes');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/can-use-database', (req, res) => {
    let canUseDatabase = false;
    if (req.user._id.toString() === keys.mongoUserID.toString()){
      canUseDatabase = true;
    }
    res.send(canUseDatabase);
  });
}
