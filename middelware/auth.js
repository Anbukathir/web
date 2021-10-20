const passport = require('passport');

const verifyCallback = (req, resolve, reject, requiredRights) => async (
  err,
  user,
  info,
) => {
  if (err || info || !user) {
    return reject('Please authenticate');
  }
  req.user = user;

  // if (requiredRights.length) {
  //   const userRights = roleRights.get(user.role);
  // }

  resolve();
};



const auth = (...requiredRights) => async (req, res, next) => new Promise((resolve, reject) => {
  passport.authenticate(
    'jwt',
    { session: false },
    verifyCallback(req, resolve, reject, requiredRights),
  )(req, res, next);
})
  .then(() => {
    console.log("success");
    return next()
  })
  .catch((err) => next(err));

module.exports = auth
