const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  if (!username || !password) {
    sendUserError('You will need to enter a username & password.', res);
  }
  const user = new User({ username, password });
  user.save()
  .then((newUser) => {
    res.status(200).json(newUser);
  })
  .catch((err) => {
    res.status(500).json({ error: 'There was a server error while signing up', err });
  });
};

module.exports = {
  createUser
};
