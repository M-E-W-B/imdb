const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const pick = require("lodash/pick");
const User = require("../models/user");
const config = require("../config");
const { Mail } = require("../utils");

module.exports = router => {
  router.post("/login", function(req, res, next) {
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (!user) {
          return next(new Error("Authentication failed. User not found."));
        } else if (user) {
          if (!user.validPassword(req.body.password)) {
            return next(new Error("Authentication failed. Wrong password."));
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
      })
      .catch(next);
  });

  router.post("/signup", (req, res, next) => {
    const obj = pick(req.body, [
      "firstName",
      "lastName",
      "password",
      "phoneNumber",
      "email"
    ]);

    if (!obj.password) return next(new Error("Password is required!"));

    if (obj.password.length < 6 || obj.password.length > 20)
      return next(new Error("Only 6 to 20 character length allowed!"));

    const user = new User(obj);
    // store encrypted password
    user.password = user.generateHash(obj.password);
    user
      .save()
      .then(user => res.json(user))
      .catch(next);
  });

  router.post("/forgot-password", (req, res, next) => {
    const to = req.body.email;

    if (!to) return next(new Error("Please provide an EmailId."));

    User.findOne({
      email: to
    })
      .then(user => {
        if (!user) {
          next(new Error("User not found."));
        } else if (user) {
          user.resetPasswordToken = crypto.randomBytes(50).toString("hex");
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
          return user.save();
        }
      })
      .then(user => {
        const subject = "Important: Forgot Password";
        const html = `
        <h2>Don't worry, we all forget sometimes</h2>
        <p>Hello ${user.firstName}, <br>
        You've recently asked to reset the password for this Imdb account: <br>
        ${to} <br>
        To update your password, click the link below: <br>
        Token: ${user.resetPasswordToken} <br>
        <a href="http://www.google.com" target="_blank">Reset my password</a> <br>
        Cheers! <br>
        IMDB Team</p>`;

        Mail(subject, html, to, (err, info) => {
          if (err) {
            next(err);
          } else {
            res.json({
              message: `An e-mail has been sent to ${to} with further instructions.`,
              info
            });
          }
        });
      })
      .catch(next);
  });

  router.post("/reset-password", (req, res, next) => {
    const { password, token } = req.body;

    if (!password) return next(new Error("Please provide a password."));

    User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    })
      .then(user => {
        if (!user) {
          return next(
            new Error("Password reset token is invalid or has expired.")
          );
        } else {
          user.password = user.generateHash(password);
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;
          return user.save();
        }
      })
      .then(user => {
        const subject = "Important: Your password has been changed";
        const html = `
        <p>Hello ${user.firstName}, <br>
        This is a confirmation that the password for your account ${
          user.email
        } has just been changed. <br>
        Cheers! <br>
        IMDB Team</p>`;

        Mail(subject, html, to, (err, info) => {
          if (err) {
            next(err);
          } else {
            res.json({
              message: `Success! Your password has been changed.`,
              info
            });
          }
        });
      })
      .catch(next);
  });
};
