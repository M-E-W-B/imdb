const User = require("../models/user");
const jwt = require("jsonwebtoken");
const pick = require("lodash/pick");
const config = require("../config");

module.exports = router => {
  router.post("/authenticate", function(req, res) {
    User.findOne(
      {
        email: req.body.email
      },
      function(err, user) {
        if (err) throw err;

        if (!user) {
          res.json({ message: "Authentication failed. User not found." });
        } else if (user) {
          if (!user.validPassword(req.body.password)) {
            res.json({ message: "Authentication failed. Wrong password." });
          } else {
            const { _id, firstName, email } = user;
            const payload = { _id, firstName, email };

            const token = jwt.sign(payload, config.secret, {
              expiresIn: 86400 // expires in 24 hours
            });

            res.json({
              message: "Enjoy your token!",
              user: payload,
              token
            });
          }
        }
      }
    );
  });

  router.post("/user", (req, res, next) => {
    const obj = pick(req.body, [
      "firstName",
      "lastName",
      "password",
      "phoneNumber",
      "email"
    ]);

    const user = new User(obj);
    // store encrypted password
    user.password = user.generateHash(obj.password);
    user
      .save()
      .then(user => res.json(user))
      .catch(next);
  });
};
